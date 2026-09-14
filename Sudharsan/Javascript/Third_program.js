function delayFunction(message: string, time: number): void {

    setTimeout(() => {
        console.log(message);
    }, time);
}

delayFunction("Hello after delay", 2000);
