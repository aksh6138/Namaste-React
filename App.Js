import React  from "react";
import  ReactDOM  from "react-dom/client";


//Header  -- logo -- Menu items
//body -- search bar -- Cards
// Footer -- copyrights --Links -- insta/fb/twitter --licenses
 

const resList =  [
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "406091",
            name: "Third Wave Coffee",
            uuid: "4988e3a5-f758-4889-987f-38ccb9f7d150",
            city: "1",
            area: "Sarjapur Road",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
            cuisines: [
              "Beverages",
              "Bakery",
              "Continental"
            ],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 18,
            minDeliveryTime: 18,
            maxDeliveryTime: 18,
            slaString: "18 MINS",
            lastMileTravel: 2.9000000953674316,
            slugs: {
              restaurant: "third-wave-coffee-roasters-bellandur-sarjapur-bellandur-sarjapur-2",
              city: "bangalore"
            },
            cityState: "1",
            address: "Thirdwave Coffee Roaster, Sy No.53/6, Sarjapur Road, Doddakanneli, Bangalore, Mahadevapura , B.B.M.P East, Karnataka-560035",
            locality: "Daddakanahalli",
            parentId: 274773,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            ribbon: [
              {
                type: "PROMOTED"
              }
            ],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "distance",
                  fee: 3300,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 3300,
              message: "",
              title: "Delivery Charge",
              amount: "3300",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=7156093~p=1~eid=00000189-087f-bfc0-1f2a-90fc00900133~srvts=1688064737216",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "2.9 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "30% OFF",
              subHeader: "UPTO ₹75",
              discountTag: "",
              headerTypeV2: 0
            },
            sla: {
              restaurantId: "406091",
              deliveryTime: 18,
              minDeliveryTime: 18,
              maxDeliveryTime: 18,
              lastMileTravel: 2.9000000953674316,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: true,
            avgRating: "4.3",
            totalRatings: 1000,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "654333",
            name: "Biryani Pot",
            uuid: "a06569bd-472f-49b0-b1b1-0e62e863a1bc",
            city: "1",
            area: "Bellandur",
            totalRatingsString: "20+ ratings",
            cloudinaryImageId: "c2203515d2289b88d6a916a43988120c",
            cuisines: [
              "Biryani",
              "Chinese",
              "North Indian",
              "Fast Food"
            ],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "₹250 FOR TWO",
            deliveryTime: 21,
            minDeliveryTime: 21,
            maxDeliveryTime: 21,
            slaString: "21 MINS",
            lastMileTravel: 2.5,
            slugs: {
              restaurant: "biryani-pot-bellandur-sarjapur-bellandur-sarjapur-2",
              city: "bangalore"
            },
            cityState: "1",
            address: "6/2, Opposite Food World Supermarket Road, 12th Cross, Kasavannahalli Main Road, Bellandur Ward, Sarjapur Road, Bangalore",
            locality: "Kasavannahalli Main Road",
            parentId: 21798,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "distance",
                  fee: 3300,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 3300,
              message: "",
              title: "Delivery Charge",
              amount: "3300",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "2.5 kms",
            hasSurge: false,
            sla: {
              restaurantId: "654333",
              deliveryTime: 21,
              minDeliveryTime: 21,
              maxDeliveryTime: 21,
              lastMileTravel: 2.5,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.6",
            totalRatings: 20,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "418",
            name: "Ande Ka Funda",
            uuid: "80f87c90-b6f4-48ef-b110-9bbfad549b39",
            city: "1",
            area: "Kadubeesanahalli",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "hwnvirxf8oxaubiflcag",
            cuisines: [
              "North Indian"
            ],
            tags: [],
            costForTwo: 10000,
            costForTwoString: "₹100 FOR TWO",
            deliveryTime: 37,
            minDeliveryTime: 37,
            maxDeliveryTime: 37,
            slaString: "37 MINS",
            lastMileTravel: 7.800000190734863,
            slugs: {
              restaurant: "ande-ka-funda-shymala-reddy-dental-college-road-marathahalli",
              city: "bangalore"
            },
            cityState: "1",
            address: "6, Shymala Reddy Dental College Road, Marathahalli",
            locality: "Munnekolala",
            parentId: 15677,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "distance",
                  fee: 8600,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 8600,
              message: "",
              title: "Delivery Charge",
              amount: "8600",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "7.8 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "20% OFF",
              subHeader: "UPTO ₹50",
              discountTag: "",
              headerTypeV2: 0
            },
            sla: {
              restaurantId: "418",
              deliveryTime: 37,
              minDeliveryTime: 37,
              maxDeliveryTime: 37,
              lastMileTravel: 7.800000190734863,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.5",
            totalRatings: 10000,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "1221",
            name: "Biryani Day",
            uuid: "1dec917e-3f4b-479b-b4db-f7095248bbd8",
            city: "1",
            area: "Marathahalli",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "ucpbuzrvhg0ire3h9hwu",
            cuisines: [
              "North Indian",
              "Chinese",
              "Andhra",
              "Biryani"
            ],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "₹250 FOR TWO",
            deliveryTime: 28,
            minDeliveryTime: 28,
            maxDeliveryTime: 28,
            slaString: "28 MINS",
            lastMileTravel: 8,
            slugs: {
              restaurant: "biryani-day-thulsi-theater-road-marathahalli",
              city: "bangalore"
            },
            cityState: "1",
            address: "No 389/2, 7th Cross, Thulsi Theater Road, Marathalli",
            locality: "Thulsi Theater Road",
            parentId: 2635,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "distance",
                  fee: 8600,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 8600,
              message: "",
              title: "Delivery Charge",
              amount: "8600",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "8 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "20% OFF",
              subHeader: "UPTO ₹50",
              discountTag: "",
              headerTypeV2: 0
            },
            sla: {
              restaurantId: "1221",
              deliveryTime: 28,
              minDeliveryTime: 28,
              maxDeliveryTime: 28,
              lastMileTravel: 8,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "IT_IS_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.7",
            totalRatings: 10000,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "323512",
            name: "Pizza Hut",
            uuid: "47a3cb39-ef62-4ed0-8e4f-36fcea4f6e2c",
            city: "1",
            area: "Bellandur",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
            cuisines: [
              "Pizzas"
            ],
            tags: [],
            costForTwo: 35000,
            costForTwoString: "₹350 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 30,
            slaString: "30 MINS",
            lastMileTravel: 3.9000000953674316,
            slugs: {
              restaurant: "pizza-hut-bellandur-village-bellandur-sarjapur",
              city: "bangalore"
            },
            cityState: "1",
            address: "Pizza Hut at Khata No- 643/656/672/152, Plot No- 151, 152 & 153 situated at Bellandur Village, Varthur Hobli, Bangalore 560103",
            locality: "Kadubeesanahalli",
            parentId: 721,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "distance",
                  fee: 4100,
                  message: ""
                },
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 4100,
              message: "",
              title: "Delivery Charge",
              amount: "4100",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "3.9 kms",
            hasSurge: false,
            sla: {
              restaurantId: "323512",
              deliveryTime: 30,
              minDeliveryTime: 30,
              maxDeliveryTime: 30,
              lastMileTravel: 3.9000000953674316,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 1000,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "561159",
            name: "Asian Momo Company",
            uuid: "9e9cc00f-5fda-42af-b6d3-099c55e440bf",
            city: "1",
            area: "Bellandur",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "heacla7iizdj80p5l2wo",
            cuisines: [
              "Chinese"
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 27,
            minDeliveryTime: 27,
            maxDeliveryTime: 27,
            slaString: "27 MINS",
            lastMileTravel: 3.9000000953674316,
            slugs: {
              restaurant: "asian-momo-company-bellandur-sarjapur-bellandur-sarjapur",
              city: "bangalore"
            },
            cityState: "1",
            address: "Opposite DS Enterprises, next to Shobha Lakeview Club House, Green Glen Layout, Bellandur, Bengaluru, Karnataka 560103, India",
            locality: "Green Glen Layout",
            parentId: 337776,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            ribbon: [
              {
                type: "PROMOTED"
              }
            ],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "distance",
                  fee: 4100,
                  message: ""
                },
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 4100,
              message: "",
              title: "Delivery Charge",
              amount: "4100",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=6887669~p=7~eid=00000189-087f-bfc0-1f2a-90fe0090071a~srvts=1688064737216",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "3.9 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "30% OFF",
              subHeader: "UPTO ₹75",
              discountTag: "",
              headerTypeV2: 0
            },
            sla: {
              restaurantId: "561159",
              deliveryTime: 27,
              minDeliveryTime: 27,
              maxDeliveryTime: 27,
              lastMileTravel: 3.9000000953674316,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: true,
            avgRating: "4.2",
            totalRatings: 1000,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "709170",
            name: "Imperio Restaurant",
            uuid: "b831b957-c7b1-4fb4-bb7c-b07ce0c72cb1",
            city: "1",
            area: "HSR",
            totalRatingsString: "500+ ratings",
            cloudinaryImageId: "a1629b9c7f59577a55411e94425c6d99",
            cuisines: [
              "Indian",
              "Biryani"
            ],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "₹500 FOR TWO",
            deliveryTime: 28,
            minDeliveryTime: 28,
            maxDeliveryTime: 28,
            slaString: "28 MINS",
            lastMileTravel: 5.699999809265137,
            slugs: {
              restaurant: "imperio-restaurant-hsr-hsr-2",
              city: "bangalore"
            },
            cityState: "1",
            address: "imperio restaurant , 495, 17th Cross Rd, Parangi Palaya, Sector 2, HSR Layout, Bengaluru, Karnataka",
            locality: "Sector 2",
            parentId: 5610,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "distance",
                  fee: 6600,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 6600,
              message: "",
              title: "Delivery Charge",
              amount: "6600",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "5.6 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "40% OFF",
              subHeader: "UPTO ₹80",
              discountTag: "",
              headerTypeV2: 0
            },
            sla: {
              restaurantId: "709170",
              deliveryTime: 28,
              minDeliveryTime: 28,
              maxDeliveryTime: 28,
              lastMileTravel: 5.699999809265137,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 500,
            new: true
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "94703",
            name: "Sri Punjabi Dhaba",
            uuid: "244943ac-cb6b-439f-9a09-687af66615b1",
            city: "1",
            area: "BTM Layout",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "i53hrycmcn2oehrojag0",
            cuisines: [
              "North Indian",
              "Biryani",
              "Chinese",
              "Kebabs"
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 34,
            minDeliveryTime: 34,
            maxDeliveryTime: 34,
            slaString: "34 MINS",
            lastMileTravel: 8.800000190734863,
            slugs: {
              restaurant: "sri-punjabi-dhaba-bangalore-btm",
              city: "bangalore"
            },
            cityState: "1",
            address: "Opposite 11th Cross 20th Main Rd,beside sri balaji wood Old Madiwala, Cashier Layout,  1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029",
            locality: "Cashier Layout",
            parentId: 21426,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "distance",
                  fee: 9600,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 9600,
              message: "",
              title: "Delivery Charge",
              amount: "9600",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "8.8 kms",
            hasSurge: false,
            sla: {
              restaurantId: "94703",
              deliveryTime: 34,
              minDeliveryTime: 34,
              maxDeliveryTime: 34,
              lastMileTravel: 8.800000190734863,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.0",
            totalRatings: 10000,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "449804",
            name: "Living Bowls",
            uuid: "cfb95f5c-9c43-4bea-a65d-61e369e9e306",
            city: "1",
            area: "Kudlu Gate",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "9726755cb6f18f1c3ca2ce4720adfe24",
            cuisines: [
              "Healthy Food",
              "Salads",
              "Juices",
              "Keto"
            ],
            tags: [],
            costForTwo: 35000,
            costForTwoString: "₹350 FOR TWO",
            deliveryTime: 22,
            minDeliveryTime: 22,
            maxDeliveryTime: 22,
            slaString: "22 MINS",
            lastMileTravel: 5,
            slugs: {
              restaurant: "living-bowls-koramangala-koramangala",
              city: "bangalore"
            },
            cityState: "1",
            address: "Living Food, 7th Mile Hosur Rd, Kudlu Gate, Bengaluru, Karnataka 560068",
            locality: "7th Mile Hosur Rd",
            parentId: 270680,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            ribbon: [
              {
                type: "PROMOTED"
              }
            ],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "distance",
                  fee: 6600,
                  message: ""
                },
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 6600,
              message: "",
              title: "Delivery Charge",
              amount: "6600",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=7188686~p=10~eid=00000189-087f-bfc0-1f2a-90ff00900a03~srvts=1688064737216",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "5 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "50% OFF",
              subHeader: "UPTO ₹100",
              discountTag: "",
              headerTypeV2: 0
            },
            sla: {
              restaurantId: "449804",
              deliveryTime: 22,
              minDeliveryTime: 22,
              maxDeliveryTime: 22,
              lastMileTravel: 5,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: true,
            avgRating: "4.3",
            totalRatings: 1000,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "178387",
            name: "Hyderabadi Handi Biryani",
            uuid: "e6832cc6-4c6c-4976-a00b-f545b6de2fdf",
            city: "1",
            area: "Marathahalli",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "ewzw2m8whkincsto9kqm",
            cuisines: [
              "Biryani",
              "North Indian",
              "Desserts",
              "Tandoor",
              "Hyderabadi",
              "Andhra"
            ],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 26,
            minDeliveryTime: 26,
            maxDeliveryTime: 26,
            slaString: "26 MINS",
            lastMileTravel: 7.300000190734863,
            slugs: {
              restaurant: "hyderabadi-handi-biryani-marathahalli-marathahalli",
              city: "bangalore"
            },
            cityState: "1",
            address: "New Address No.32,ckb layout, munekolola, marthahali, Bangalore-37.",
            locality: "CKB Layout",
            parentId: 11087,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "distance",
                  fee: 8600,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 8600,
              message: "",
              title: "Delivery Charge",
              amount: "8600",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "7.3 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "40% OFF",
              subHeader: "UPTO ₹80",
              discountTag: "",
              headerTypeV2: 0
            },
            sla: {
              restaurantId: "178387",
              deliveryTime: 26,
              minDeliveryTime: 26,
              maxDeliveryTime: 26,
              lastMileTravel: 7.300000190734863,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "IT_IS_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.5",
            totalRatings: 10000,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "394626",
            name: "La Pino'z Pizza",
            uuid: "55522b30-ac60-4fb7-b0ef-4566914f22d2",
            city: "1",
            area: "Bellandur",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "ntlp9znkk0htmyw0bvjv",
            cuisines: [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 24,
            minDeliveryTime: 24,
            maxDeliveryTime: 24,
            slaString: "24 MINS",
            lastMileTravel: 2.4000000953674316,
            slugs: {
              restaurant: "la-pino'z-pizza-bellandur-sarjapur-bellandur-sarjapur",
              city: "bangalore"
            },
            cityState: "1",
            address: "La Pino'z Pizza, #11/50/3, Ambalipura, Village, Sarjapur - Marathahalli Rd, Bengaluru, Karnataka 560103",
            locality: "Sarjapur - Marathahalli Rd",
            parentId: 4961,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "distance",
                  fee: 3300,
                  message: ""
                },
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 3300,
              message: "",
              title: "Delivery Charge",
              amount: "3300",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "2.4 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "50% OFF",
              subHeader: "UPTO ₹100",
              discountTag: "",
              headerTypeV2: 0
            },
            sla: {
              restaurantId: "394626",
              deliveryTime: 24,
              minDeliveryTime: 24,
              maxDeliveryTime: 24,
              lastMileTravel: 2.4000000953674316,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 5000,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "543387",
            name: "Pablo's Sandwiches",
            uuid: "08a97645-15db-4d5b-800d-c9f092682e38",
            city: "1",
            area: "Bommanahalli",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "ade35df398ccdc19f0cc48dfd572647f",
            cuisines: [
              "Healthy Food",
              "American",
              "European",
              "Bakery",
              "Juices",
              "Sweets",
              "Snacks",
              "Cafe",
              "Fast Food",
              "Beverages",
              "Desserts"
            ],
            tags: [],
            costForTwo: 35000,
            costForTwoString: "₹350 FOR TWO",
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 25,
            slaString: "25 MINS",
            lastMileTravel: 5,
            slugs: {
              restaurant: "living-bakery-kudlu-gate-kudlu-gate",
              city: "bangalore"
            },
            cityState: "1",
            address: "SURVEY NO.48 4B 48 C, 7TH MILE, HOSUR ROAD, NEAR KUDLU GATE, VAJRAHALLI, NEXT TO JSP FORD SERVICE CENTER  BENGALURU, KARNATAKA, INDIA, Bommanahalli , B.B.M.P South, Karnataka 560068",
            locality: "Vajrahalli",
            parentId: 394078,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            ribbon: [
              {
                type: "PROMOTED"
              }
            ],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "distance",
                  fee: 6600,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 6600,
              message: "",
              title: "Delivery Charge",
              amount: "6600",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=7188691~p=13~eid=00000189-087f-bfc0-1f2a-910000900d61~srvts=1688064737216",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "5 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "50% OFF",
              subHeader: "UPTO ₹100",
              discountTag: "",
              headerTypeV2: 0
            },
            sla: {
              restaurantId: "543387",
              deliveryTime: 25,
              minDeliveryTime: 25,
              maxDeliveryTime: 25,
              lastMileTravel: 5,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: true,
            avgRating: "4.4",
            totalRatings: 1000,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "7316",
            name: "Chakh Le India",
            uuid: "718f1dbd-8642-43b4-b37a-fbad50fcb9c0",
            city: "1",
            area: "Marathahalli",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "zv1yzrscwqfelm0kdmsq",
            cuisines: [
              "North Indian",
              "Fast Food",
              "South Indian",
              "Biryani",
              "Chinese",
              "Combo",
              "Thalis"
            ],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 33,
            minDeliveryTime: 33,
            maxDeliveryTime: 33,
            slaString: "33 MINS",
            lastMileTravel: 7.800000190734863,
            slugs: {
              restaurant: "chakh-le-india-munnekolal-marathahalli",
              city: "bangalore"
            },
            cityState: "1",
            address: "Ande ka Funda  6  Shymala Reddy Dental College Road  Marathahalli",
            locality: "Munnekolala",
            parentId: 237,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "distance",
                  fee: 8600,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 8600,
              message: "",
              title: "Delivery Charge",
              amount: "8600",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "7.8 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "20% OFF",
              subHeader: "UPTO ₹50",
              discountTag: "",
              headerTypeV2: 0
            },
            sla: {
              restaurantId: "7316",
              deliveryTime: 33,
              minDeliveryTime: 33,
              maxDeliveryTime: 33,
              lastMileTravel: 7.800000190734863,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.4",
            totalRatings: 10000,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "72821",
            name: "Burger King",
            uuid: "d9021b3a-1e7c-497a-b52b-2561ad674af6",
            city: "1",
            area: "Kaikondrahalli",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            cuisines: [
              "Burgers",
              "American"
            ],
            tags: [],
            costForTwo: 35000,
            costForTwoString: "₹350 FOR TWO",
            deliveryTime: 26,
            minDeliveryTime: 26,
            maxDeliveryTime: 26,
            slaString: "26 MINS",
            lastMileTravel: 3,
            slugs: {
              restaurant: "burger-king-bellandur-bellandursarjapur",
              city: "bangalore"
            },
            cityState: "1",
            address: "Burger King, Surjapur road, Dodda Kannali  Bengaluru South Karnataka--560035",
            locality: "Dodda Kannali",
            parentId: 166,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "distance",
                  fee: 4100,
                  message: ""
                },
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 4100,
              message: "",
              title: "Delivery Charge",
              amount: "4100",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "3 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "60% OFF",
              subHeader: "UPTO ₹120",
              discountTag: "",
              headerTypeV2: 0
            },
            sla: {
              restaurantId: "72821",
              deliveryTime: 26,
              minDeliveryTime: 26,
              maxDeliveryTime: 26,
              lastMileTravel: 3,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 10000,
            new: false
          },
          subtype: "basic"
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "444074",
            name: "Magnolia Bakery",
            uuid: "8fe485d2-f63a-4443-ac78-3acd3a547078",
            city: "1",
            area: "Bellandur",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "6f0945b8b18d9f4241dd1cd9a70e23d7",
            cuisines: [
              "Bakery",
              "Desserts",
              "Ice Cream"
            ],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "₹500 FOR TWO",
            deliveryTime: 19,
            minDeliveryTime: 19,
            maxDeliveryTime: 19,
            slaString: "19 MINS",
            lastMileTravel: 4.800000190734863,
            slugs: {
              restaurant: "magnolia-bakery-bellandur-sarjapur-bellandur-sarjapur",
              city: "bangalore"
            },
            cityState: "1",
            address: "Unit 26A - 1, The Bay, RMZ Ecoworld, Marathahalli - Sarjapur Outer Ring Rd, Bengaluru, Karnataka 560103",
            locality: "RMZ Ecoworld",
            parentId: 267303,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            ribbon: [
              {
                type: "PROMOTED"
              }
            ],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "distance",
                  fee: 4900,
                  message: ""
                },
                {
                  name: "time",
                  fee: 0,
                  message: ""
                },
                {
                  name: "special",
                  fee: 0,
                  message: ""
                }
              ],
              totalFees: 4900,
              message: "",
              title: "Delivery Charge",
              amount: "4900",
              icon: ""
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "Closes soon"
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=6900984~p=16~eid=00000189-087f-bfc0-1f2a-91010090106e~srvts=1688064737216",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: []
            },
            lastMileTravelString: "4.8 kms",
            hasSurge: false,
            sla: {
              restaurantId: "444074",
              deliveryTime: 19,
              minDeliveryTime: 19,
              maxDeliveryTime: 19,
              lastMileTravel: 4.800000190734863,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY"
            },
            promoted: true,
            avgRating: "4.5",
            totalRatings: 1000,
            new: false
          },
          subtype: "basic"
        }
      ];
    

const Header = () => {
   return <div className = "container">
    <div className = "logo-container">
    <img className = "logo" src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt = "Logo"/>
    </div>
        <div className = "nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>

        </div>

    </div>
}

const Body = () => {
    return (
        <div>
          <SearchBar/>
          <RestaurantComp/>
        </div>
    )

    
        
    
}

const SearchBar = () => {
    return (
        <div className="SearchBar">
              <h2> search Bar</h2>
        </div>
    )
}

const RestaurantComp = () => {
    return (
        <div className="res-container">
            {resList.map( restaurant => <RestaurantCard key = {restaurant.data.id} resData = {restaurant}/>)}
           
        </div>
    )
}

const RestaurantCard = (props) => {
    const{ resData} = props;
    return (
        <div className="rescard-Container">
            <img className="res-logo" src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.data.cloudinaryImageId } alt ="res-logo"/>
            <h2>{resData.data.name}</h2>
            <h4>{resData.data.avgRating}</h4>
            <h4>{resData.data.cuisines.join(",")}</h4>
        </div>
    )
}

// const heading = React.createElement("div", { id: "parent", xyz: "abc" }, 
// [
//     React.createElement("h1",{id : "child1"},"I am child1"),
//     React.createElement("h2",{id : "child2"},"I am child2!")
// ]);

// const heading = (
// <h1 className = "heading" tabIndex=  "5">
//     Namaste React
//     </h1>
//     );

// const HeadingComponent = ()  => {

//     return <div id = "container"> <h1 className="heading">Namaste React</h1></div>
// }


//if we are writing in single line then we dont need to keep JSX in () but if we are writing in multiple line then
//it should be enclosed within brackets





const Applayout = () => {
   return <div className="App">
       <Header/>
       <Body/>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(<Applayout/>);