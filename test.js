var exec = require("child_process").exec;
const cpuAll = require("./execute.config");

const s = JSON.stringify(cpuAll).replaceAll('"', '\\"');

function run_shell_command(payloads, cb) {
  exec(
    `cd get_sys_state_V1.0 && ./client 1 1 "${payloads}"`,
    function (err, stdout, stderr) {
      if (err) {
        cb(stderr);
      } else {
        cb(stdout);
      }
    }
  );
}

let pre;
let preIdle = 0,
  preIowait = 0,
  preNoIdle = 0,
  preTotal = 0,
  pIDLE = 0,
  percentage = 0;
run_shell_command(s, function (result) {
  if (pre === undefined) {
    pre = JSON.parse(result);
    preIdle = pre.cpu.jiffies[0].idle;
    preIowait = pre.cpu.jiffies[0].iowait;
    pIDLE = preIdle + preIowait;
    preNoIdle =
      pre.cpu.jiffies[0].user +
      pre.cpu.jiffies[0].nice +
      pre.cpu.jiffies[0].sys +
      pre.cpu.jiffies[0].irq +
      pre.cpu.jiffies[0].softirq;
    preTotal = pIDLE + preNoIdle;
  } else {
    pre = JSON.parse(result);
    let idle = pre.cpu.jiffies[0].idle;
    let Iowait = pre.cpu.jiffies[0].iowait;
    let IDLE = idle + Iowait;
    let NoIdle =
      pre.cpu.jiffies[0].user +
      pre.cpu.jiffies[0].nice +
      pre.cpu.jiffies[0].sys +
      pre.cpu.jiffies[0].irq +
      pre.cpu.jiffies[0].softirq;
    let total = IDLE + NoIdle;
    percentage = (total - preTotal - (IDLE - pIDLE)) / (total - preTotal);
    console.log((percentage * 100).toFixed(2) + "%");
    preIdle = idle;
    preIowait = Iowait;
    pIDLE = IDLE;
    preNoIdle = NoIdle;
    preTotal = total;
    return percentage;
  }
});

module.exports = { run_shell_command, s };
