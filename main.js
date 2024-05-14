import inquirer from "inquirer";
const input = await inquirer.prompt({ message: "select the weather for getup recommendation", type: "list", name: "weather",
    choices: ["snowy", "sunny", "rainy"]
});
switch (input.weather) {
    case "snowy":
        console.log("Wear warm clothes.");
        break;
    case "sunny":
        console.log("wear sun glasses and light clothes.");
        break;
    case "rainy":
        console.log("wear rain coat or take umbrella.");
        break;
    default:
        console.log("Invalid input");
}
