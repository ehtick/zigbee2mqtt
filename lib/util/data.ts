import path from "node:path";

function setPath(): string {
    return process.env.ZIGBEE2MQTT_DATA ? process.env.ZIGBEE2MQTT_DATA : path.normalize(path.join(__dirname, "..", "..", "data"));
}

let dataPath = setPath();

function joinPath(file: string): string {
    return path.resolve(dataPath, file);
}

function getPath(): string {
    return dataPath;
}

function _testReload(): void {
    dataPath = setPath();
}

// biome-ignore lint/style/useNamingConvention: test
export default {joinPath, getPath, _testReload};
