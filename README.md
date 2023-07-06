# Run Case File Action

Runs a saved case file (JSON) against the dev EEC instance.


# Developing

1. Make changes to the src dir
2. Run `yarn all` to package artifacts
3. Commit and push

# Usage

```
- name: Submit
  uses: e2grnd/e2g-run-case-file-action@main
  with:
    auth-secret: ${{ secrets.MY_AUTH_SECRET }}
    calc-dir: path to a single calculator directory in calculator-ui
    static-dir: path to static directory in calculator-ui
    timeout: 300
```
