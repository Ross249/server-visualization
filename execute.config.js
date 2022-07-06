// import { exec } from "child_process";

// const config = {
//   cpu: [
//     {
//       e: ["wa", "id"],
//     },
//     {
//       jiffies: [
//         {
//           attr: "all",
//         },
//       ],
//     },
//   ],
// };

// const s = JSON.stringify(config);

// const c = s.replaceAll('"', '\\"');

// exec(`cd get_sys_state_V1.0 && ./client 1 1 ${c}`, (err, stdout, stderr) => {
//   if (err) {
//     // node couldn't execute the command
//     console.log(err);
//   }

//   // the *entire* stdout and stderr (buffered)
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });
