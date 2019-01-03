# AWS_PROFILE in lambda env
The AWS profile is shared via an env var declared here: https://github.com/dschep-bug-repos/sls-aws-profile-in-invoke-env/blob/master/serverless.yml#L45-L46
```
$ sls invoke local -f hello
{
    "AWS_PROFILE": "default"
}
$ sls invoke local -f hello --aws-profile foobar
{
    "AWS_PROFILE": "foobar"
}
```
