import Images from "./Images";
import Images2 from "./Images2";
import { IoIosCheckmarkCircle } from "react-icons/io";
<IoIosCheckmarkCircle />;

import { IoIosRemoveCircleOutline } from "react-icons/io";
<IoIosRemoveCircleOutline />;

const Data = [
  {
    first: <Images2 message="Transfer Fee" />,
    second: (
      <Images
        image={<IoIosRemoveCircleOutline />}
        message="Up to ₦50 plus V.A.T."
      />
    ),
    third: (
      <Images
        image={<IoIosCheckmarkCircle />}
        message="25 free transfers every month"
      />
    ),
  },

  {
    first: <Images2 message="Card Delivery" />,
    second: <Images image={<IoIosRemoveCircleOutline />} message="😒" />,
    third: <Images image={<IoIosCheckmarkCircle />} message="Yes" />,
  },

  {
    first: <Images2 message="Card Maintenance Fee" />,
    second: (
      <Images
        image={<IoIosRemoveCircleOutline />}
        message="Up to ₦50 per quarter"
      />
    ),
    third: <Images image={<IoIosCheckmarkCircle />} message="No" />,
  },

  {
    first: <Images2 message="Alerts" />,
    second: (
      <Images
        image={<IoIosRemoveCircleOutline />}
        message="Charge for SMS alerts"
      />
    ),
    third: (
      <Images
        image={<IoIosCheckmarkCircle />}
        message="Free instant notifications"
      />
    ),
  },

  {
    first: <Images2 message="Annual Interest" />,
    second: <Images image={<IoIosRemoveCircleOutline />} message="4%" />,
    third: <Images image={<IoIosCheckmarkCircle />} message="Up to 15%" />,
  },

  {
    first: <Images2 message="Bill Payment Fee" />,
    second: (
      <Images
        image={<IoIosRemoveCircleOutline />}
        message="Up to ₦100 per bill"
      />
    ),
    third: <Images image={<IoIosCheckmarkCircle />} message="No" />,
  },

  {
    first: <Images2 message="Instant Reversals" />,
    second: <Images image={<IoIosRemoveCircleOutline />} message="😒" />,
    third: <Images image={<IoIosCheckmarkCircle />} message="Yes" />,
  },

  {
    first: <Images2 message="Maintenance" />,
    second: <Images image={<IoIosRemoveCircleOutline />} message="No" />,
    third: <Images image={<IoIosCheckmarkCircle />} message="Yes" />,
  },
];

export default Data;
