## **Assumptions for Credit Calculation**

1. **OpenAI Pricing Reference**:
   - **Text Generation (Chat Completion)**:
     - **$5.00** per **1M tokens**
   - **Image Generation**:
     - **$0.040** per **image**
   - **Text-to-Speech (TTS)**:
     - **$15.00** per **1M characters** (**$0.015** per **1k characters**)

2. **Credit Allocation**:
   - **Text Generation Tokens**:  
     - **Credits Offered** = (Total Tokens) ÷ 1,000,000 × $5.00
   - **Image Generation Requests**:  
     - **Credits Offered** = Number of Images × $0.040
   - **Text-to-Speech Characters**:  
     - **Credits Offered** = (Requests × Characters per Request) ÷ 1,000 × $0.015

3. **Currency**:
   - All credits are calculated in **US Dollars ($)**.
   - Exchange rate used: **$1 = ₹80**

---

## **1. Daily Plan**

| **Feature**                       | **Free Plan**          | **Pro Plan (₹16.63/day)** | **Advanced Plan (₹40.00/day)** | **Ultimate Plan (₹66.67/day)** |
|-----------------------------------|------------------------|----------------------------|-------------------------------|-------------------------------|
| **Text Generation Tokens**       | 200k tokens/day        | 1M tokens/day              | 3M tokens/day                 | 5M tokens/day                 |
| **Input Token Cap (per query)**  | 4k tokens              | 32k tokens                 | Full context window           | Full context window           |
| **Output Token Cap (per query)** | 4k tokens              | 8k tokens                  | Full output capability        | Full output capability        |
| **Image Generation (requests)**   | 20/day                 | 50/day                     | 200/day                       | 500/day                       |
| **Text-to-Speech (requests)**     | 20/day                 | 50/day                     | 500/day                       | 1k/day                        |
| **Text-to-Speech (characters)**   | 500/request            | 1k/request                 | 2k/request                    | 5k/request                    |
| **Requests per Minute (RPM)**     | 2 RPM                  | 3 RPM                      | 4 RPM                         | 4+ RPM (expandable)           |
| **Requests per Second (RPS)**     | 1 RPS                  | 2 RPS                      | 3 RPS                         | 3+ RPS (expandable)           |
| **API Access**                    | Not Available          | Same as Playground Caps    | Same as Playground Caps       | Same as Playground Caps       |
| **Credits Offered - Text Generation** | **$1.00 (₹80.00)**     | **$5.00 (₹400.00)**        | **$15.00 (₹1,200.00)**          | **$25.00 (₹2,000.00)**        |
| **Credits Offered - Image Generation** | **$0.80 (₹64.00)**    | **$2.00 (₹160.00)**        | **$8.00 (₹640.00)**            | **$20.00 (₹1,600.00)**        |
| **Credits Offered - Text-to-Speech** | **$0.15 (₹12.00)**     | **$0.75 (₹60.00)**         | **$15.00 (₹1,200.00)**          | **$75.00 (₹6,000.00)**         |
| **Total Credits Offered**         | **$1.95 (₹156.00)**     | **$7.75 (₹620.00)**        | **$38.00 (₹3,040.00)**          | **$120.00 (₹9,600.00)**        |

**Calculation Details**:

- **Free Plan**:
  - **Text Generation**: 200,000 tokens × ($5 / 1,000,000) = **$1.00 (₹80.00)**
  - **Image Generation**: 20 images × $0.040 = **$0.80 (₹64.00)**
  - **Text-to-Speech**: 20 requests × 500 characters × ($0.015 / 1,000) = **$0.15 (₹12.00)**
  - **Total**: $1.00 + $0.80 + $0.15 = **$1.95 (₹156.00)**

- **Pro Plan (₹16.63/day)**:
  - **Text Generation**: 1,000,000 tokens × ($5 / 1,000,000) = **$5.00 (₹400.00)**
  - **Image Generation**: 50 images × $0.040 = **$2.00 (₹160.00)**
  - **Text-to-Speech**: 50 requests × 1,000 characters × ($0.015 / 1,000) = **$0.75 (₹60.00)**
  - **Total**: $5.00 + $2.00 + $0.75 = **$7.75 (₹620.00)**

- **Advanced Plan (₹40.00/day)**:
  - **Text Generation**: 3,000,000 tokens × ($5 / 1,000,000) = **$15.00 (₹1,200.00)**
  - **Image Generation**: 200 images × $0.040 = **$8.00 (₹640.00)**
  - **Text-to-Speech**: 500 requests × 2,000 characters × ($0.015 / 1,000) = **$15.00 (₹1,200.00)**
  - **Total**: $15.00 + $8.00 + $15.00 = **$38.00 (₹3,040.00)**

- **Ultimate Plan (₹66.67/day)**:
  - **Text Generation**: 5,000,000 tokens × ($5 / 1,000,000) = **$25.00 (₹2,000.00)**
  - **Image Generation**: 500 images × $0.040 = **$20.00 (₹1,600.00)**
  - **Text-to-Speech**: 1,000 requests × 5,000 characters × ($0.015 / 1,000) = **$75.00 (₹6,000.00)**
  - **Total**: $25.00 + $20.00 + $75.00 = **$120.00 (₹9,600.00)**

---

## **2. Monthly Plan**

*Assuming **30 days** in a month.*

| **Feature**                       | **Free Plan**    | **Pro Plan (₹499)** | **Advanced Plan (₹1,200)** | **Ultimate Plan (₹2,000)**  |
|-----------------------------------|------------------|---------------------|----------------------------|-----------------------------|
| **Text Generation Tokens**       | 6M tokens/month  | 30M tokens/month    | 90M tokens/month           | 150M tokens/month           |
| **Input Token Cap (per query)**  | 4k tokens        | 32k tokens          | Full context window        | Full context window         |
| **Output Token Cap (per query)** | 4k tokens        | 8k tokens           | Full output capability     | Full output capability      |
| **Image Generation (requests)**   | 600/month        | 1.5k/month          | 6k/month                   | 15k/month                   |
| **Text-to-Speech (requests)**     | 600/month        | 1.5k/month          | 15k/month                  | 30k/month                   |
| **Text-to-Speech (characters)**   | 500/request      | 1k/request          | 2k/request                 | 5k/request                  |
| **Requests per Minute (RPM)**     | 2 RPM            | 3 RPM               | 4 RPM                      | 4+ RPM                      |
| **Requests per Second (RPS)**     | 1 RPS            | 2 RPS               | 3 RPS                      | 3+ RPS                      |
| **API Access**                    | Not Available    | Same as Playground Caps | Same as Playground Caps | Same as Playground Caps    |
| **Credits Offered - Text Generation** | **$30.00 (₹2,400.00)**     | **$150.00 (₹12,000.00)**         | **$450.00 (₹36,000.00)**          | **$750.00 (₹60,000.00)**              |
| **Credits Offered - Image Generation** | **$24.00 (₹1,920.00)**     | **$60.00 (₹4,800.00)**          | **$240.00 (₹19,200.00)**             | **$600.00 (₹48,000.00)**              |
| **Credits Offered - Text-to-Speech** | **$4.50 (₹360.00)**      | **$22.50 (₹1,800.00)**          | **$450.00 (₹36,000.00)**            | **$2,250.00 (₹180,000.00)**          |
| **Total Credits Offered**         | **$58.50 (₹4,680.00)**       | **$232.50 (₹18,600.00)**         | **$1,140.00 (₹91,200.00)**            | **$3,600.00 (₹288,000.00)**             |

**Calculation Details**:

- **Free Plan**:
  - **Text Generation**: 6,000,000 tokens × ($5 / 1,000,000) = **$30.00 (₹2,400.00)**
  - **Image Generation**: 600 images × $0.040 = **$24.00 (₹1,920.00)**
  - **Text-to-Speech**: 600 requests × 500 characters × ($0.015 / 1,000) = **$4.50 (₹360.00)**
  - **Total**: $30.00 + $24.00 + $4.50 = **$58.50 (₹4,680.00)**

- **Pro Plan (₹499)**:
  - **Text Generation**: 30,000,000 tokens × ($5 / 1,000,000) = **$150.00 (₹12,000.00)**
  - **Image Generation**: 1,500 images × $0.040 = **$60.00 (₹4,800.00)**
  - **Text-to-Speech**: 1,500 requests × 1,000 characters × ($0.015 / 1,000) = **$22.50 (₹1,800.00)**
  - **Total**: $150.00 + $60.00 + $22.50 = **$232.50 (₹18,600.00)**

- **Advanced Plan (₹1,200)**:
  - **Text Generation**: 90,000,000 tokens × ($5 / 1,000,000) = **$450.00 (₹36,000.00)**
  - **Image Generation**: 6,000 images × $0.040 = **$240.00 (₹19,200.00)**
  - **Text-to-Speech**: 15,000 requests × 2,000 characters × ($0.015 / 1,000) = **$450.00 (₹36,000.00)**
  - **Total**: $450.00 + $240.00 + $450.00 = **$1,140.00 (₹91,200.00)**

- **Ultimate Plan (₹2,000)**:
  - **Text Generation**: 150,000,000 tokens × ($5 / 1,000,000) = **$750.00 (₹60,000.00)**
  - **Image Generation**: 15,000 images × $0.040 = **$600.00 (₹48,000.00)**
  - **Text-to-Speech**: 30,000 requests × 5,000 characters × ($0.015 / 1,000) = **$2,250.00 (₹180,000.00)**
  - **Total**: $750.00 + $600.00 + $2,250.00 = **$3,600.00 (₹288,000.00)**

---

## **3. Yearly Plan**

*Assuming **365 days** in a year.*

| **Feature**                       | **Free Plan**      | **Pro Plan (₹5,900/year)**    | **Advanced Plan (₹14,200/year)**   | **Ultimate Plan (₹23,800/year)**    |
|-----------------------------------|--------------------|-------------------------------|------------------------------------|--------------------------------------|
| **Text Generation Tokens**       | 73M tokens/year    | 365M tokens/year              | 1.095B tokens/year                 | 1.825B tokens/year                   |
| **Input Token Cap (per query)**  | 4k tokens          | 32k tokens                    | Full context window                | Full context window                  |
| **Output Token Cap (per query)** | 4k tokens          | 8k tokens                     | Full output capability             | Full output capability               |
| **Image Generation (requests)**   | 7.3k/year          | 18.25k/year                   | 73k/year                           | 182.5k/year                          |
| **Text-to-Speech (requests)**     | 7.3k/year          | 18.25k/year                   | 73k/year                           | 365k/year                            |
| **Text-to-Speech (characters)**   | 500/request        | 1k/request                    | 2k/request                         | 5k/request                           |
| **Requests per Minute (RPM)**     | 2 RPM              | 3 RPM                         | 4 RPM                              | 4+ RPM                               |
| **Requests per Second (RPS)**     | 1 RPS              | 2 RPS                         | 3 RPS                              | 3+ RPS                               |
| **API Access**                    | Not Available      | Same as Playground Caps       | Same as Playground Caps            | Same as Playground Caps              |
| **Credits Offered - Text Generation** | **$365.00 (₹29,200.00)**     | **$1,825.00 (₹146,000.00)**            | **$5,475.00 (₹438,000.00)**                | **$9,125.00 (₹730,000.00)**            |
| **Credits Offered - Image Generation** | **$292.00 (₹23,360.00)**     | **$730.00 (₹58,400.00)**              | **$2,920.00 (₹233,600.00)**               | **$7,300.00 (₹584,000.00)**             |
| **Credits Offered - Text-to-Speech** | **$54.75 (₹4,380.00)**      | **$273.75 (₹21,900.00)**             | **$2,190.00 (₹175,200.00)**               | **$27,375.00 (₹2,190,000.00)**          |
| **Total Credits Offered**         | **$711.75 (₹56,940.00)**       | **$2,828.75 (₹226,300.00)**           | **$10,585.00 (₹846,800.00)**               | **$43,800.00 (₹3,504,000.00)**            |

**Calculation Details**:

- **Free Plan**:
  - **Text Generation**: 73,000,000 tokens × ($5 / 1,000,000) = **$365.00 (₹29,200.00)**
  - **Image Generation**: 7,300 images × $0.040 = **$292.00 (₹23,360.00)**
  - **Text-to-Speech**: 7,300 requests × 500 characters × ($0.015 / 1,000) = **$54.75 (₹4,380.00)**
  - **Total**: $365.00 + $292.00 + $54.75 = **$711.75 (₹56,940.00)**

- **Pro Plan (₹5,900/year)**:
  - **Text Generation**: 365,000,000 tokens × ($5 / 1,000,000) = **$1,825.00 (₹146,000.00)**
  - **Image Generation**: 18,250 images × $0.040 = **$730.00 (₹58,400.00)**
  - **Text-to-Speech**: 18,250 requests × 1,000 characters × ($0.015 / 1,000) = **$273.75 (₹21,900.00)**
  - **Total**: $1,825.00 + $730.00 + $273.75 = **$2,828.75 (₹226,300.00)**

- **Advanced Plan (₹14,200/year)**:
  - **Text Generation**: 1,095,000,000 tokens × ($5 / 1,000,000) = **$5,475.00 (₹438,000.00)**
  - **Image Generation**: 73,000 images × $0.040 = **$2,920.00 (₹233,600.00)**
  - **Text-to-Speech**: 73,000 requests × 2,000 characters × ($0.015 / 1,000) = **$2,190.00 (₹175,200.00)**
  - **Total**: $5,475.00 + $2,920.00 + $2,190.00 = **$10,585.00 (₹846,800.00)**

- **Ultimate Plan (₹23,800/year)**:
  - **Text Generation**: 1,825,000,000 tokens × ($5 / 1,000,000) = **$9,125.00 (₹730,000.00)**
  - **Image Generation**: 182,500 images × $0.040 = **$7,300.00 (₹584,000.00)**
  - **Text-to-Speech**: 365,000 requests × 5,000 characters × ($0.015 / 1,000) = **$27,375.00 (₹2,190,000.00)**
  - **Total**: $9,125.00 + $7,300.00 + $27,375.00 = **$43,800.00 (₹3,504,000.00)**

---

## **4. Monthly Usage Comparison with OpenAI**

Below is a comparison of your **Monthly Plans** against purchasing the equivalent credits directly from **OpenAI**.

| **Plan**         | **Plan Price (₹)** | **Total Credits Offered** | **OpenAI Equivalent Cost (₹)** | **Savings (₹)**      |
|------------------|--------------------|---------------------------|-------------------------------|----------------------|
| **Free Plan**    | **Free**           | **$58.50 (₹4,680.00)**    | **₹4,680.00**                 | **₹4,680.00**        |
| **Pro Plan**     | **₹499**           | **$232.50 (₹18,600.00)**  | **₹18,600.00**                | **₹18,101.00**       |
| **Advanced Plan**| **₹1,200**         | **$1,140.00 (₹91,200.00)**| **₹91,200.00**                | **₹90,000.00**       |
| **Ultimate Plan**| **₹2,000**         | **$3,600.00 (₹288,000.00)**| **₹288,000.00**               | **₹286,000.00**      |

**Explanation**:

- **Plan Price (₹)**: The cost of the plan per month.
- **Total Credits Offered**: Sum of credits from all model types, in both US Dollars and Indian Rupees.
- **OpenAI Equivalent Cost (₹)**: The cost of purchasing the same amount of credits directly from OpenAI, converted to Indian Rupees.
- **Savings (₹)**: The difference between the OpenAI Equivalent Cost and the Plan Price.

**Summary**:

By subscribing to our plans, you receive substantial savings compared to purchasing credits directly from OpenAI. For instance, with the **Pro Plan**, you save over **₹18,100** every month.

---

## **5. Summary of Credits Offered**

| **Plan Type**    | **Daily Credits Offered (₹)** | **Monthly Credits Offered (₹)** | **Yearly Credits Offered (₹)** |
|------------------|-------------------------------|---------------------------------|--------------------------------|
| **Free Plan**    | ₹156.00                       | ₹4,680.00                       | ₹56,940.00                     |
| **Pro Plan**     | ₹620.00                       | ₹18,600.00                      | ₹226,300.00                    |
| **Advanced Plan**| ₹3,040.00                     | ₹91,200.00                      | ₹846,800.00                    |
| **Ultimate Plan**| ₹9,600.00                     | ₹288,000.00                     | ₹3,504,000.00                  |