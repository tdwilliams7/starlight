### starlight

to run `git clone https://github.com/tdwilliams7/starlight.git`

run `npm run build`

run `npm run start`

or [deployed version](https://starlight-qgowgpbvmj.now.sh/)

### Paycheck generator

Required Inputs

* pay period = per calendar month
* gross-income = annual-salary / 12 months
* income-tax = calculated using annual-salary based on the tax table provided below
* net-income = gross-income - income-tax
* super = gross-income x super-rate

All calculation results rounded to the whole nearest dollar EXCEPT tax amounts
ie. 2669.5 rounded down to 2669 instead of to 2670

| firstName | lastName | annual salary | super rate % | pay period          |
| --------- | -------- | ------------- | ------------ | ------------------- |
| Andrew    | Smith    | 60050         | 9%           | 01 March – 31 March |
| Claire    | Wong     | 120000        | 10%          | 01 March – 31 March |

Output
| name | pay-period | gross-income | income-tax | net-Income | super-amount|
| ------- | ---- | ------- | -----| ------ |------|
| Andrew Smith | 01 March – 31 March | 5004 | 922 | 4082 | 450|
| Claire Wong | 01 March – 31 March | 10000 | 2669 | 7331 | 1000|

uses nextjs and context to get information from localStorage to display a calculated paycheck.
