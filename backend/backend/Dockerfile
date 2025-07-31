# Use OpenJDK 21
FROM eclipse-temurin:21-jdk

# Set working directory
WORKDIR /app

# Copy the JAR file (update this if your JAR name is different)
COPY target/doctor-app-0.0.1-SNAPSHOT.jar app.jar

# Expose port (e.g., 8080)
EXPOSE 8080

# Run the JAR
ENTRYPOINT ["java", "-jar", "app.jar"]
