#!/bin/bash
# Clean Next.js cache to prevent webpack caching issues
echo "Cleaning Next.js cache..."

# Create .next directory if it doesn't exist
mkdir -p .next

# Ensure proper permissions on .next directory
echo "Setting permissions on .next directory..."
chmod -R 755 .next 2>/dev/null || true

# Clean cache with retry mechanism
MAX_ATTEMPTS=3
ATTEMPT=1
SUCCESS=false

while [ $ATTEMPT -le $MAX_ATTEMPTS ] && [ "$SUCCESS" = false ]; do
  echo "Attempt $ATTEMPT of $MAX_ATTEMPTS to clean cache..."
  
  if rm -rf .next; then
    SUCCESS=true
    echo "Cache cleaned successfully."
  else
    echo "Failed to clean cache. Retrying in 2 seconds..."
    sleep 2
    ATTEMPT=$((ATTEMPT + 1))
  fi
done

if [ "$SUCCESS" = false ]; then
  echo "Failed to clean cache after $MAX_ATTEMPTS attempts."
  exit 1
fi

echo "Next.js cache cleanup completed."