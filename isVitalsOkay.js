function BpmAbnormalCheck(bpm){
    if(bpm < 70) {
        return "LOW!";
    }
    else if(bpm > 150){
        return "HIGH!";
    }
    else{
        return "normal";
    }
}

function Spo2AbnormalCheck(spo2){
    if(spo2 < 90) {
        return "LOW!";
    }
    else{
        return "normal";
    }
}

function ResprateAbnormalCheck(respRate){
    if(respRate < 30) {
        return "LOW!";
    }
    else if(respRate > 95){
        return "HIGH!";
    }
    else{
        return "normal";
    }
}

function isBpmOkay(bpm){
    return !(bpm < 70 || bpm > 150);
}

function isSpo2Okay(spo2){
    return !(spo2 < 90)
}

function isRespRateOkay(respRate){
    return !(respRate <30 || respRate > 95);
}

module.exports = {isBpmOkay, isSpo2Okay, isRespRateOkay, BpmAbnormalCheck, Spo2AbnormalCheck, ResprateAbnormalCheck};