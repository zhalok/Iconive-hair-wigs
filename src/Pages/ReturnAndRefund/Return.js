import React from "react";

export default function Return() {
  return (
    <div className="container text-start py-5">
      <div class="">
        {/* return */}
        <h5 className="fw-bold text-secondary border-bottom  pb-2 pt-3">
          Returns :{" "}
        </h5>
        <p className="text-secondary pt-2">
          1 .
          <small>
            You have 7 calendar days to return an item from the date you
            received it
          </small>
        </p>
        <p className="text-secondary">
          2 .
          <small>
            To be eligible for a return, your item must be unused and in the
            same condition that you received it. Also-{" "}
          </small>
          <ul>
            <li>
              <small>Your item must be in the original packaging.</small>
            </li>
            <li>
              <small>
                Your item needs to have the receipt or proof of purchase.
              </small>
            </li>
          </ul>
        </p>
        {/* refunds: */}
        <h5 className="fw-bold text-secondary border-bottom  pb-2 pt-4">
          Refunds :{" "}
        </h5>
        <p className="text-secondary pt-2">
          1 .
          <small>
            Once we receive your item, we will inspect it and notify you that we
            have received your returned item. We will immediately notify you on
            the status of your refund after inspecting the item.
          </small>
        </p>
        <p className="text-secondary">
          2 .
          <small>
            If your return is approved, we will initiate a refund to your
            credit/debit card.
          </small>
        </p>
        <p className="text-secondary">
          3 .
          <small>
            If you find there is a problem with your order or are unhappy with
            your hair system in any way when you receive it please contact us
            immediately. Do not cut, style, color or wash the hair or wear the
            hair system. Our customer service team will be happy to discuss any
            issue with you and will be able to replace your hair system with
            another one if required.
          </small>
        </p>
        <p className="text-secondary">
          4 .
          <small>
            Please note that, If your ordered items were not stock items, 25%
            amount of the full payment will be deducted as service fee & rest
            amount will be refunded. In order to cover labor and material costs,
            if you cancel an order before you receive it, you will only receive
            a 75% refund.
          </small>
        </p>
        <p className="text-secondary">
          5 .
          <small>
            If you order a wrong custom made hair system by mistake, the hair
            system cannot be returned for a refund. If you would like us to
            adjust it, extra cost will be charged accordingly.
          </small>
        </p>
        <p className="text-secondary">
          6 .
          <small>
            You will be responsible for the hair systems until they reach us.
          </small>
        </p>
        <p className="text-secondary">
          7 .
          <small>
            You will receive the credit within a certain amount (usually 15-20
            workdays) of days, depending on your card issuer's policies.
          </small>
        </p>
      </div>
    </div>
  );
}
