var vitalsCheck = require('./isVitalsOkay.js');
const expect = require('chai').expect;

function vitalsAreOk(bpm, spo2, respRate){
    return(vitalsCheck.isBpmOkay(bpm) && vitalsCheck.isSpo2Okay(spo2) && vitalsCheck.isRespRateOkay(respRate));
}

function abnormalVitalReport(bpm, spo2, respRate){
    let level = "";
    level = level+"Bpm-level: "+vitalsCheck.BpmAbnormalCheck(bpm)+" <--\n";
    level = level+"Spo2-level: "+vitalsCheck.Spo2AbnormalCheck(spo2)+" <--\n";
    level = level+"RespRate-level: "+vitalsCheck.ResprateAbnormalCheck(respRate)+" <--\n";
    return level;
}

expect(vitalsAreOk(100, 95, 70)).to.be.true;//sample
expect(vitalsAreOk(50, 95, 70)).to.be.false;//sample
expect(vitalsAreOk(10, 10, 10)).to.be.false;//all 3 fail
expect(vitalsAreOk(10, 95, 70)).to.be.false;//bpm fail
expect(vitalsAreOk(100, 10, 70)).to.be.false;//spo2 fail
expect(vitalsAreOk(100, 95, 10)).to.be.false;//resprate fail
expect(vitalsAreOk(10, 10, 70)).to.be.false;//bpm and spo2 fail
expect(vitalsAreOk(100, 10, 10)).to.be.false;//spo2 and resprate fail
expect(vitalsAreOk(10, 95, 10)).to.be.false;//bpm and resprate fail

console.log(abnormalVitalReport(95,90,90));
console.log('checker is done');
