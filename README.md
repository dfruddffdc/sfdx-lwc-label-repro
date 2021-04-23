# sfdx-lwc-label-repro

## Replication steps
1. Create a scratch org
2. Push using the SFDX CLI, as of commit 3a6571227b7be9cc8609c7aba44df0421a7c1cf4
3. Push using the SFDX CLI, as of commit 11bee930929db7695c770db958e01dcb3b524d85

Expected result:
* Push succeeds, and new label is pushed alongside the updated LWC which references it

Actual result:
* Push fails, claiming that the label does not exist