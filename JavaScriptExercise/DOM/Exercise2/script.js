
const div = document.querySelector("div");

const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");

para1.textContent = `ejoifjofk kpofk kpkp okh guy guyfyt fuygu jo 
 iojoij oij oikpo  yufyt yvfy fuy hoij pokp
 h iujokpo kp gt tryees cg iuokpl.`;
 para1.style.backgroundColor = "cyan";
 para1.style.color = "purple";

para2.textContent = `iotjrojf ht hygkh wfcjf i efk fiewj fefj iuhi
guygu bd tcyg grtd fh jijo ii tdrt
t uhoi hh frsiunoj pouu ertdcgbkj opkpo kytyul.`;
para2.style.backgroundColor = "yellow";
para2.style.color = "red";

para3.textContent = `wr e gthfvdxfsch ihuyfyt dyfy guijhoi huy fb jm
gfuy ghihj iuydrfojio uuit wcgij okoug sctg uyhiujoi
 uyuih uini gyug dtc ybi nokpo ioi hftr serd tguhi jo.`;
 para3.style.backgroundColor = "lightgreen";
 para3.style.color = "blue";

//  div.append(para1, para2, para3);
div.appendChild(para1);
div.appendChild(para2);
div.appendChild(para3);

div.lastElementChild.after(para1);