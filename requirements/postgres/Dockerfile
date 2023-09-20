# Base image
FROM postgres:latest

# Create a directory for the custom PostgreSQL data &&
# Change ownership and permissions using the default postgres user
RUN mkdir -p /var/lib/postgresql \
	&& chown -R postgres:postgres /var/lib/postgresql \
	&& chmod 700 /var/lib/postgresql
