let dimensions= [[4,3],[3,4]]
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal=-1;
    let maxArea=0
    
    for(let i=0;i<dimensions.length;i++){
        let L=dimensions[i][0];
        let W=dimensions[i][1];
        
        let diag=L*L + W*W;
        let area=L*W
        
        if(diag>maxDiagonal){
            maxDiagonal=diag;
            maxArea=area
        }else if(maxDiagonal===diag){
            if(area>maxArea){
                maxArea=area
            }
        }
        
    }
    return maxArea
};
console.log(areaOfMaxDiagonal(dimensions))