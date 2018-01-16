var katzDeliLine = []
function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length > 0){
    var first = line[0];
    line.shift()
    return `Currently serving ${first}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  if(line.length===0){
    return "The line is currently empty."
  }else{
    var message = `The line is currently: `
    for(let i=0;i>line.lenth-1;i++){
      message += `${i+1}. ${line[i]}, `
    }
    message += `${line.length}. ${line[line.length-1]}`
    return message
  }
}
