# fyle-backend-api
Fyle Full Stack Coding Challenge


The coding challenge is divided into 2 parts.

1. Develop a REST service(preferably, but not necessarily using a python based web framework)
2. Develop a single page web app (preferably, but not necessarily in [Angular 2+](https://angular.io/)) that fetches and displays the data fetched from the API built in part 1

## **Part 1:**

You need to create a REST service that can fetch bank details, using the data given in the API’s query parameters.

You can use the data available in this [repository](https://github.com/snarayanank2/indian_banks) in your backend DB. Write your service in any language of your choice. Host it on Heroku - you can sign up for a free account in Heroku. E.g. [Here are steps](https://devcenter.heroku.com/articles/getting-started-with-python) on how you can get a Django app running in Heroku in a few minutes. Please use PostgreSQL as your backend DB. Since the free-tier of Heroku has a limit of 10k rows, you can use another DB provider (eg: you can use [clever-cloud.com](https://www.clever-cloud.com/) to host your Postgres DB by [following steps](https://www.clever-cloud.com/doc/addons/clever-cloud-addons/)).

Essentials your applications should have:

1. Autocomplete API to return possible matches based on the branch name **ordered by IFSC code** (ascending order) with limit and offset.
    1. **Endpoint: /api/branches/autocomplete?q=<>**
    2. Example: /api/branches/autocomplete?q=**RTGS**&limit=3&offset=0
    3. Sample response:

    ```json
    {
       "branches":[
          {
             "ifsc":"ABHY0065001",
             "bank_id":60,
             "branch":"RTGS-HO",
             "address":"ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024",
             "city":"MUMBAI",
             "district":"GREATER MUMBAI",
             "state":"MAHARASHTRA"
          },
          {
             "ifsc":"ABNA0000001",
             "bank_id":110,
             "branch":"RTGS-HO",
             "address": "414 EMPIRE COMPLEX, SENAPATI BAPAT MARG LOWER PAREL WEST MUMBAI 400013",
             "city":"MUMBAI",
             "district":"GREATER BOMBAY",
             "state":"MAHARASHTRA"
          },
          {
             "ifsc":"ADCB0000001",
             "bank_id":143,
             "branch":"RTGS-HO",
             "address":"75, REHMAT MANZIL, V. N. ROAD, CURCHGATE, MUMBAI - 400020",
             "city":"MUMBAI",
             "district":"MUMBAI CITY",
             "state":"MAHARASHTRA"
          },
          {
             "ifsc":"ADCC0000001",
             "bank_id":61,
             "branch":"RTGS-HO",
             "address": "THE AKOLA DISTRICT CENTRAL COOP. BANK LTD., P.B.NO. 8, CIVIL LINES, S.A. COLLEGE ROAD, AKOLA. 444001",
             "city":"AKOLA",
             "district":"AKOLA",
             "state":"MAHARASHTRA"
          }
       ]
    }
    ```
    

    
    2. Search API to return possible matches across all columns and all rows, **ordered by IFSC code** (ascending order) with limit and offset.

1. **Endpoint: /api/branches?q=<>**
2. Example: /api/branches?q=**Bangalore**&limit=4&offset=0
3. Sample response:

```json
{
   "branches":[
      {
         "ifsc":"ABNA0100318",
         "bank_id":110,
         "branch":"BANGALORE",
         "address":"PRESTIGE TOWERS', GROUND FLOOR, 99 & 100, RESIDENCY ROAD, BANGALORE 560 025.",
         "city":"BANGALORE",
         "district":"BANGALORE URBAN",
         "state":"KARNATAKA"
      },
      {
         "ifsc":"ADCB0000002",
         "bank_id":143,
         "branch":"BANGALORE",
         "address": "CITI CENTRE, 28, CHURCH STREET, OFF M. G. ROAD BANGALORE 560001",
         "city":"BANGALORE",
         "district":"BANGALORE URBAN",
         "state":"KARNATAKA"
      },
      {
         "ifsc":"ALLA0210217",
         "bank_id":11,
         "branch":"K. G. ROAD",
         "address": "NO. 2, FKCCI BUILDING, K G ROAD, BANGALORE",
         "city":"BANGALORE",
         "district":"BANGALORE URBAN",
         "state":"KARNATAKA"
      },
      {
         "ifsc":"ALLA0210326",
         "bank_id":11,
         "branch": "BANGALORE BASAVANGUDI",
         "address":"121, RM COMPLEX, DR.D.V.GUNDAPPA ROAD, BASAVANGUDI, BANGALORE - 560004",
         "city":"BANGALORE",
         "district":"BANGALORE URBAN",
         "state":"KARNATAKA"
      }
   ]
}
```
