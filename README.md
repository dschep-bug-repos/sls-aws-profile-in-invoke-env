# AWS_PROFILE in lambda env
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
