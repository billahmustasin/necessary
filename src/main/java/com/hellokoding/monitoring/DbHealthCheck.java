package com.hellokoding.monitoring;

import com.github.strengthened.prometheus.healthchecks.HealthCheck;
import com.github.strengthened.prometheus.healthchecks.HealthStatus;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Logger;

class DbHealthCheck extends HealthCheck {
    private final Logger logger = Logger.getLogger(this.getClass().getName());

    @Override
    public HealthStatus check() {
        return checkDbConnection() ? HealthStatus.HEALTHY : HealthStatus.UNHEALTHY;
    }

    private boolean checkDbConnection() {
        try (Connection connection = DriverManager.getConnection("jdbc:mysql://mysqld:3306/myDb?useSSL=false", "root", "myRootPassword123")) {
            logger.info("Database connected!");
            return true;
        } catch (SQLException e) {
            logger.info("Can not connect the database!");
            return false;
        }
    }
}
