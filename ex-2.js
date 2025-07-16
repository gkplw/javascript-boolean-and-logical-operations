// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

// john
lastMonthPaidMoreThan4000 = 4001;
isWeekday = "Friday";
hasBoughtProductFromITCategory = "never";
hasAttendedDiscountEvent = "ever";
isPlatinum = "Gold";

let hasPromotion =
  (lastMonthPaidMoreThan4000 > 4000 &&
    isWeekday == "Friday" &&
    hasBoughtProductFromITCategory == "never" &&
    hasAttendedDiscountEvent == "never") ||
  isPlatinum == "Platinum";

console.log(hasPromotion);
