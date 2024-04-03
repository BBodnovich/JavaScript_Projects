function fibonacci(number) {
    let answer = [0, 1];
    for (let i = 2; i <= number; i++) {
        answer.push(answer[i-2] + answer[i-1]);
    }
    return answer[number];
    // return answer.pop();
}