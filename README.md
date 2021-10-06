# codehub2
生成公钥私钥
openssl
生成私钥
genrsa -out private.key 1024
生成公钥
rsa -in private.key -pubout -out public.key