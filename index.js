function superbowlWin(record){
    const result = record.find(record => record.result === "W");
    if(!result == true){
        return undefined;
    }else{
        return result.year
    }
}


