import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const angleToDegree = (angle: number) => {
  return angle * (180 / Math.PI);
};

const GuageChart = () => {
  const [percentage, setPercentage] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  const innerRadius = 22;
  const outerRadius = 30;
  const arcMin = (-Math.PI * 2) / 3;
  const arcMax = (Math.PI * 2) / 3;

  let preAngle = 0;

  const fetchCpuData = async () => {
    const response = await fetch("/api/cpu");
    const data = await response.json();
    setPercentage(Number((data.usage * 0.01).toFixed(2)));
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const chart = document.getElementById("chart");
    const width: number | undefined = chart?.clientWidth;
    const height: number | undefined = chart?.clientHeight;

    const arc: any = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(arcMin);

    function arcTween(newAngle: number) {
      return function (d: any) {
        const interpolate = d3.interpolate(d.endAngle, newAngle); //在两个值间找一个插值
        return function (t: number) {
          d.endAngle = interpolate(t); //根据 transition 的时间 t 计算插值并赋值给endAngle
          return arc(d); //返回新的“d”属性值
        };
      };
    }

    const g = svg
      .append("g")
      .attr("transform", `translate(${width! / 2}, ${height! / 2})`);

    //添加仪表盘的标题
    g.append("text")
      .style("font-size", "1.5em")
      .style("fill", "#A1A6AD")
      .style("alignment-baseline", "central") //相对父元素对齐方式
      .style("text-anchor", "middle") //文本锚点，居中
      .attr("y", -45) //到中心的距离
      .text("CPU占用率");
    //添加仪表盘显示的数值，因为之后还要更新，所以声明一个变量
    let valueLabel = g
      .append("text")
      .style("font-size", "2em")
      .style("fill", "#A1A6AD")
      .style("alignment-baseline", "central") //相对父元素对齐方式
      .style("text-anchor", "middle") //文本锚点，居中
      .attr("y", 25) //到中心的距离
      .text(0);
    //添加仪表盘显示数值的单位
    g.append("text")
      .style("font-size", "0.8em")
      .style("fill", "#A1A6AD")
      .style("alignment-baseline", "central") //相对父元素对齐方式
      .style("text-anchor", "middle") //文本锚点，居中
      .attr("y", 40) //到中心的距离
      .text("%");

    const background = g
      .append("path")
      .datum({ endAngle: arcMax }) //传递endAngle参数到arc方法
      .style("fill", "#444851")
      .attr("d", arc);

    //计算圆弧的结束角度
    const currentAngle = percentage * (arcMax - arcMin) + arcMin;
    //添加另一层圆弧，用于表示百分比
    const foreground = g
      .append("path")
      .datum({ endAngle: currentAngle })
      .style("fill", "orange")
      .attr("d", arc);

    const tick = g
      .append("line")
      .attr("x1", 0)
      .attr("y1", -innerRadius)
      .attr("x2", 0)
      .attr("y2", -(innerRadius + 12)) //定义line位置，默认是在圆弧正中间，12是指针的长度
      .style("stroke", "#A1A6AD")
      .attr("transform", "rotate(" + angleToDegree(currentAngle) + ")");

    const interval = setInterval(() => {
      fetchCpuData();
      console.log("per" + percentage);

      //更新数值
      valueLabel.text(percentage * 100);
      //更新圆弧，并且设置渐变动效
      foreground
        .transition()
        .duration(750)
        .ease(d3.easeElastic) //设置来回弹动的效果
        .attrTween("d", arcTween(percentage * (arcMax - arcMin) + arcMin)); //设置圆弧的结束角度

      //更新圆弧末端的指针标记，并且设置渐变动效
      tick
        .transition()
        .duration(750)
        .ease(d3.easeElastic) //设置来回弹动的效果
        .attrTween("transform", function () {
          //设置“transform”属性的渐变，原理同上面的arcTween方法
          const i = d3.interpolate(
            angleToDegree(preAngle),
            angleToDegree(percentage * (arcMax - arcMin) + arcMin)
          ); //取插值
          return function (t) {
            return "rotate(" + i(t) + ")";
          };
        });
      preAngle = percentage * arcMax;
      console.log("angle" + preAngle);
    }, 1000);

    return () => {
      d3.select(svgRef.current).exit().remove();
      clearInterval(interval);
    };
  }, [percentage]);

  return (
    <svg
      id="chart"
      ref={svgRef}
      className="w-40 m-auto opacity-75 text-xs"
    ></svg>
  );
};

export default GuageChart;
