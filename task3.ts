async function waitAndGreet(name: string): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log(`Welcome, ${name}`);
            resolve();
        }, 2000);
    });
}


async function main() {
    await waitAndGreet('Alice');
    console.log('End of script');
}

main();
