const {Kafka} = require("kafkajs")

const kafka = new Kafka({
    clientId: 'my-app',
    brokers:['http://localhost:9092']
});

async function init(){
    const admin= kafka.admin();
    console.log("admin connecting");
    await admin.connect();
    console.log("Admin connected");

    console.log("creating topics")
    await admin.createTopics({
        topics: [
            {
                topic:'rider-updates',
                numPartitions: 2
            },
        ],
    });

    console.log('created topic [rider-updates]')
    
    console.log("disconnecting admin")
    await admin.disconnect();
}