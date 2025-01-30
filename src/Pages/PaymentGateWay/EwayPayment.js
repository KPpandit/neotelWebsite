import React, { useEffect, useRef, useState } from 'react';

export default function EwayPayment() {
  const formRef = useRef(null);
  const [eWayLoaded, setEWayLoaded] = useState(false);

  useEffect(() => {
    // Function to load the eWAY script
    const loadScript = (src, onLoad) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = onLoad;
      document.body.appendChild(script);
    };

    // Load the eWAY script and set the state when loaded
    loadScript('https://secure-au.sandbox.ewaypayments.com/scripts/eCrypt.js', () => {
      setEWayLoaded(true);
    });

    const ewayAjax = (e) => {
      e.preventDefault();
      if (!window.eWAY) {
        alert('eWAY script not loaded yet.');
        return;
      }

      // Call eWAY to process the request
      window.eWAY.process(
        formRef.current,
        {
          autoRedirect: false,
          onComplete: (data) => {
            // This is a callback to hook into when the requests completes
            alert('The JSONP request has completed.');
            if (data.Is3DSecure) {
              window.location.replace(data.RedirectUrl);
            }
          },
          onError: () => {
            // This is a callback you can hook into when an error occurs
            alert('There was an error processing the request');
          },
          onTimeout: () => {
            // This is a callback you can hook into when the request times out
            alert('The request has timed out.');
          },
        }
      );
    };

    // Add event listener to the form
    const form = formRef.current;
    if (form) {
      form.addEventListener('submit', ewayAjax);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (form) {
        form.removeEventListener('submit', ewayAjax);
      }
    };
  }, [eWayLoaded]);

  return (
    <form
      method="POST"
      action="https://secure-au.sandbox.ewaypayments.com/AccessCode/C3AB9FcgdJGzSGpXTEBV3yzQPf7sMvnJ0Nz0-N7Nap8oSThX8cndVXSuZ_hoy1MTJw_m7bSctLmYOHQNfTUvNgKNTqrjvxc9DDNWLh3FpL1XCqeiXVbJAAcJ-zGB1SRFGlmE8fmwOsRopfo1W4cFvW44raA=="
      ref={formRef}
      id="payment_form"
    >
      <input
        type="hidden"
        name="EWAY_ACCESSCODE"
        value="C3AB9FcgdJGzSGpXTEBV3yzQPf7sMvnJ0Nz0-N7Nap8oSThX8cndVXSuZ_hoy1MTJw_m7bSctLmYOHQNfTUvNgKNTqrjvxc9DDNWLh3FpL1XCqeiXVbJAAcJ-zGB1SRFGlmE8fmwOsRopfo1W4cFvW44raA=="
      />
      <input type="hidden" name="EWAY_PAYMENTTYPE" value="Credit Card" />
      <div>
        <label>Card Name: </label>
        <input type="text" name="EWAY_CARDNAME" />
      </div>
      <div>
        <label>Card Number: </label>
        <input type="text" name="EWAY_CARDNUMBER" />
      </div>
      <div>
        <label>Card Expiry Month: </label>
        <input type="text" name="EWAY_CARDEXPIRYMONTH" />
      </div>
      <div>
        <label>Card Expiry Year: </label>
        <input type="text" name="EWAY_CARDEXPIRYYEAR" />
      </div>
      <div>
        <label>Card CVN: </label>
        <input type="text" name="EWAY_CARDCVN" />
      </div>
      <div>
        <input type="submit" value="Process" text="Process" />
      </div>
    </form>
  );
}
