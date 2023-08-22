# Kafka-Pub-Sub-model
Building a realtime server for implementing a pub-sub queuing architecture.

STEPS: 

1)run zookeper image
```
docker run -p 2181:2181 zookeper
```

2)expose PORT 9092 and setup environment variables

```
docker run -p 9092:9092 \
-e KAFKA_ZOOKEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1

confluentic/cp-kafka
```