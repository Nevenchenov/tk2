export default function isIsAndInt(request) {

if(request == undefined){
    return 0;
    }
else{
        if(isNaN(Number(request))){
        return 0;
        }
        else{
            return Number(request);
        }
    }
}
