module.exports = class Memory {

    memoryUsage() {
        return process.memoryUsage();
    }

    totalMemory() {
        return (this.memoryUsage().heapTotal / (1024 ** 2)).toFixed(2);
    }

    usedMemory() {
        return (this.memoryUsage().heapUsed / (1024 ** 2)).toFixed(2);
    }

    memoryUsagePercentage() {
        return ((this.usedMemory() / this.totalMemory()) * 100).toFixed(2);
    }

    cpuUsage() {
        return process.cpuUsage();
    }

    system() {
        return process.platform;
    }

}