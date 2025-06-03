### Description
This is my personal static website which can be found on [alizoh.com](https://alizoh.com)

### Node
Node version 16.x

### AWS setup
This website is statically hosted on AWS using S3, Cloudfront & Route 53, follow these steps to get the same setup:

### Creating an S3 bucket for static hosting
- Go to the AWS S3 console, create a new bucket and name it after your domain (`alizoh.com` in my case)
- Change the permissions to public and then create the bucket
- Open the bucket and change the following:
  - Under "Properties", find "Static website hosting" and click edit
  - Select "enable", and choose "index.html" for both your index and error documents (unless you want otherwise)
  - Under "Permissions", edit your bucket policy and use the policy generator and select the following:
    - Policy type: "s3 bucket policy"
    - Principal: "*"
    - Action: "GetObject"
    - Amazon Resource Name (ARN): "{your-bucket-arn}/*"
  - Finally, click add statement, copy the policy that was generated and paste it in the previous page and save

### Creating a CloudFront distribution
- Go to Cloudfront and click Create distribution
- Select your S3 bucket from the "Origin domain" dropdown
- Under "Default cache behavior" select "Redirect HTTP to HTTPS"
- Under "Settings" select an SSL certificate:
  - You will first need to create an SSL certificate if you haven't
  - To do this click "Request certificate"
  - write 2 names in the "Fully qualified domain name", `example.com` and `*.example.com`
  - Select "DNS validation"
  - Then add the CNAME that will be provided to your DNS settings (either in route 53 or wherever else you have your DNS managemenet (e.g Godaddy))
- For your "Default root object" write `index.html`
- Click "Create distribution"

### Setting up Route 53
- Go to the Route 53 console and click "Create hosted zone"
- Write your domain name `example.com`
- Click create
- This will create a few name servers for you (Type = NS), copy them and add them to where you originally had your DNS management (GoDaddy in my case)
- Note: changing Nameserver might take a few hours
- Click "Create record", and add a Type A record, with Alias turned on, and select your Cloudfront distribution as the value and create
- Click "Create record" again and setup a CNAME with Record name "www" and the value is your root domain name (e.g `example.com`)
