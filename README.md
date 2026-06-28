cd /path/to/your-project   # ← THIS determines what's tracked
node /path/to/podman/scripts/podman-agent.mjs --name alice --pod demo-pod

For the demo, each engineer runs it from the repo they're actively working in — not the podman repo. Example:

# Alice working on auth service:
cd ~/projects/my-auth-service
node ~/podman/scripts/podman-agent.mjs --name alice --pod demo-pod

# Bob working in same repo:
cd ~/projects/my-auth-service
node ~/podman/scripts/podman-agent.mjs --name bob --pod demo-pod