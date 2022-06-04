const getMate =() =>{
    return {
            createdAt: {
                type:Number,
                default: (new Date()).getTime(),
            },
            updataAt: {
                type:Number,
                default: (new Date()).getTime(),
    
            },
        };
    };

module.exports = {
    getMate,
};