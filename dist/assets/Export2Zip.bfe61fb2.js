import{F as e}from"./FileSaver.min.7135435f.js";import{J as t}from"./index.8308f220.js";import"./vendor.71a11aaa.js";import"./index.d3348f6d.js";import"./demo.6865bdc9.js";import"./upload.eacb5f43.js";import"./file.56c9db88.js";import"./index.f3301aa0.js";function i(i,o,r,a){const n=new t,s=r||"file",f=a||"file";let p=`${i}\r\n`;o.forEach((e=>{let t="";t=e.toString(),p+=`${t}\r\n`})),n.file(`${s}.txt`,p),n.generateAsync({type:"blob"}).then((t=>{e.exports.saveAs(t,`${f}.zip`)}),(e=>{alert("导出失败")}))}export{i as export_txt_to_zip};