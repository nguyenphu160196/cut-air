module.exports = {
  secret: 'tlcntruongngocthienphu',
  database: 'mongodb://tlcn2017:tlcn!!!@ds161026.mlab.com:61026/tlcn_db'
  // database: 'mongodb://localhost:27017/tlcn_db'  
}

/*SSL key*/
/*
ThienPhus-MacBook-Pro:cut-air thienphu$ openssl genrsa 1024 > file.pem
Generating RSA private key, 1024 bit long modulus
.....................++++++
............................................++++++
e is 65537 (0x10001)
ThienPhus-MacBook-Pro:cut-air thienphu$ openssl genrsa 1024 > file.pem
Generating RSA private key, 1024 bit long modulus
..........................++++++
................++++++
e is 65537 (0x10001)
ThienPhus-MacBook-Pro:cut-air thienphu$ openssl req -new -key file.pem -out csr.pem
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:VN
State or Province Name (full name) [Some-State]:BRVT
Locality Name (eg, city) []:HCM
Organization Name (eg, company) [Internet Widgits Pty Ltd]:UTE
Organizational Unit Name (eg, section) []:CNTT
Common Name (e.g. server FQDN or YOUR name) []:Thien Phu
Email Address []:nguyenphu160196@gmail.com

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:Phu161256@
An optional company name []:UTE
*/
