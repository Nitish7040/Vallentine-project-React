
First, navigate to the k8s directory:

```bash
cd k8s
```

Then apply each manifest file in order:


Apply each manifest file in order:

```bash
kubectl apply -f Namespace.yml
kubectl apply -f Deployment.yml
kubectl apply -f Service.yml
```

Apply all manifests at once from this folder:

```bash
kubectl apply -f .
```

After applying, forward the service port to the EC2 instance:

```bash
kubectl -n vallentine-proj port-forward svc/vallentine-service 3000:3000
```

Then open the EC2 public IP with the port in your browser (and make sure the security group allows inbound `3000`):

```
http://<EC2_PUBLIC_IP>:3000
```

