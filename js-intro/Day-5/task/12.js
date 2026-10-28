
const findLargest = (...nums) => {

    let largest = 0;
    let second = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            second = largest;
            largest = nums[i];
        } else if (nums[i] > second) {
            second = nums[i];
        }
    }

    console.log("Largest Number:", largest);
    console.log("Second Largest Number:", second);
};

findLargest(23,34,56,780,24,57,89,90,12,45,67,98);

const secondlargest=(...numbers)=>{
            let largest=numbers[0]
            let second=numbers[0]
            for(let a=0; a<numbers.length; a++){
                if(numbers[a]>largest){
                    second=largest
                    largest=numbers[a]
                }
                else if(numbers[a]>second&&numbers[a]<largest){
                    second=numbers[a]
                }
            }
            return second
        }
        console.log(secondlargest(50,25,5,40,30));