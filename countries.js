const countries = [
    { name: "Afghanistan", abbr: "AF" },
    { name: "Aland Islands", abbr: "AX" },
    { name: "Albania", abbr: "AL" },
    { name: "Algeria", abbr: "DZ" },
    { name: "American Samoa", abbr: "AS" },
    { name: "Andorra", abbr: "AD" },
    { name: "Angola", abbr: "AO" },
    { name: "Anguilla", abbr: "AI" },
    { name: "Antarctica", abbr: "AQ" },
    { name: "Argentina", abbr: "AR" },
    { name: "Armenia", abbr: "AM" },
    { name: "Aruba", abbr: "AW" },
    { name: "Australia", abbr: "AU" },
    { name: "Austria", abbr: "AT" },
    { name: "Azerbaijan", abbr: "AZ" },
    { name: "Bahrain", abbr: "BH" },
    { name: "Bahamas", abbr: "BS" },
    { name: "Bangladesh", abbr: "BD" },
    { name: "Barbados", abbr: "BB" },
    { name: "Belarus", abbr: "BY" },
    { name: "Belgium", abbr: "BE" },
    { name: "Belize", abbr: "BZ" },
    { name: "Benin", abbr: "BJ" },
    { name: "Bermuda", abbr: "BM" },
    { name: "Bhutan", abbr: "BT" },
    { name: "Bosnia and Herzegovina", abbr: "BA" },
    { name: "Botswana", abbr: "BW" },
    { name: "Brazil", abbr: "BR" },
    { name: "Brunei Darussalam", abbr: "BN" },
    { name: "Bulgaria", abbr: "BG" },
    { name: "Burundi", abbr: "BI" },
    { name: "Cambodia", abbr: "KH" },
    { name: "Cameroon", abbr: "CM" },
    { name: "Canada", abbr: "CA" },
    { name: "Cape Verde", abbr: "CV" },
    { name: "Cayman Islands", abbr: "KY" },
    { name: "Central African Republic", abbr: "CF" },
    { name: "Chad", abbr: "TD" },
    { name: "Chile", abbr: "CL" },
    { name: "China", abbr: "CN" },
    { name: "Christmas Island", abbr: "CX" },
    { name: "Colombia", abbr: "CO" },
    { name: "Comoros", abbr: "KM" },
    { name: "Congo", abbr: "CG" },
    { name: "Cook Islands", abbr: "CK" },
    { name: "Costa Rica", abbr: "CR" },
    { name: "Croatia", abbr: "HR" },
    { name: "Cuba", abbr: "CU" },
    { name: "Cyprus", abbr: "CY" },
    { name: "Czech Republic", abbr: "CZ" },
    { name: "Denmark", abbr: "DK" },
    { name: "Djibouti", abbr: "DJ" },
    { name: "Dominica", abbr: "DM" },
    { name: "Dominican Republic", abbr: "DO" },
    { name: "Ecuador", abbr: "EC" },
    { name: "Egypt", abbr: "EG" },
    { name: "El Salvador", abbr: "SV" },
    { name: "Equatorial Guinea", abbr: "GQ"},
    { name: "Eritrea", abbr: "ER" },
    { name: "Estonia", abbr: "EE" },
    { name: "Ethiopia", abbr: "ET" },
    { name: "Faroe Islands", abbr: "FO" },
    { name: "Fiji", abbr: "FJ" },
    { name: "Finland", abbr: "FI" },
    { name: "France", abbr: "FR" },
    { name: "French Guiana", abbr: "GF" },
    { name: "French Polynesia", abbr: "PF" },
    { name: "Gabon", abbr: "GA" },
    { name: "Gambia", abbr: "GM" },
    { name: "Georgia", abbr: "GE" },
    { name: "Germany", abbr: "DE" },
    { name: "Ghana", abbr: "GH" },
    { name: "Gibraltar", abbr: "GI" },
    { name: "Greece", abbr: "GR" },
    { name: "Greenland", abbr: "GL" },
    { name: "Grenada", abbr: "GD" },
    { name: "Guadeloupe", abbr: "GP" },
    { name: "Guam", abbr: "GU" },
    { name: "Guatemala", abbr: "GT" },
    { name: "Guernsey", abbr: "GG" },
    { name: "Guinea", abbr: "GN" },
    { name: "Guyana", abbr: "GY" },
    { name: "Haiti", abbr: "HT" },
    { name: "Vatican City", abbr: "VA" },
    { name: "Honduras", abbr: "HN" },
    { name: "Hungary", abbr: "HU" },
    { name: "Iceland", abbr: "IS" },
    { name: "India", abbr: "IN" },
    { name: "Indonesia", abbr: "ID" },
    { name: "Iran", abbr: "IR" },
    { name: "Iraq	", abbr: "IQ" },
    { name: "Ireland", abbr: "IE" },
    { name: "Isle of Man", abbr: "IM" },
    { name: "Israel", abbr: "IL" },
    { name: "Italy", abbr: "IT" },
    { name: "Jamaica", abbr: "JM" },
    { name: "Japan", abbr: "JP" },
    { name: "Jersey", abbr: "JE" },
    { name: "Jordan", abbr: "JO" },
    { name: "Kazakhstan", abbr: "KZ" },
    { name: "Kenya", abbr: "KE" },
    { name: "Kiribati", abbr: "KI" },
    { name: "North Korea", abbr: "KP" },
    { name: "South Korea", abbr: "KR" },
    { name: "Kuwait", abbr: "KW" },
    { name: "Kyrgyzstan", abbr: "KG" },
    { name: "Lao", abbr: "LA" },
    { name: "Latvia", abbr: "LV" },
    { name: "Lebanon", abbr: "LB" },
    { name: "Lesotho", abbr: "LS" },
    { name: "Liberia", abbr: "LR" },
    { name: "Libya", abbr: "LY" },
    { name: "Liechtenstein", abbr: "LI" },
    { name: "Lithuania", abbr: "LT" },
    { name: "Luxembourg", abbr: "LU" },
    { name: "Macao", abbr: "MO" },
    { name: "Macedonia", abbr: "MK" },
    { name: "Madagascar", abbr: "MG" },
    { name: "Malawi", abbr: "MW" },
    { name: "Malaysia", abbr: "MY" },
    { name: "Maldives", abbr: "MV" },
    { name: "Mali", abbr: "ML" },
    { name: "Malta", abbr: "MT" },
    { name: "Marshall Islands", abbr: "MH" },
    { name: "Martinique", abbr: "MQ" },
    { name: "Mauritania", abbr: "MR" },
    { name: "Mauritius", abbr: "MU" },
    { name: "Mayotte", abbr: "YT" },
    { name: "Mexico", abbr: "MX" },
    { name: "Micronesia", abbr: "FM" },
    { name: "Moldova", abbr: "MD" },
    { name: "Monaco", abbr: "MC" },
    { name: "Mongolia", abbr: "MN" },
    { name: "Montenegro", abbr: "ME" },
    { name: "Montserrat", abbr: "MS" },
    { name: "Morocco", abbr: "MA" },
    { name: "Mozambique", abbr: "MZ" },
    { name: "Myanmar", abbr: "MM" },
    { name: "Namibia", abbr: "NA" },
    { name: "Nauru", abbr: "NR" },
    { name: "Nepal", abbr: "NP" },
    { name: "Netherlands", abbr: "NL" },
    { name: "New Caledonia", abbr: "NC" },
    { name: "New Zealand", abbr: "NZ" },
    { name: "Nicaragua", abbr: "NI" },
    { name: "Niger", abbr: "NE" },
    { name: "Nigeria", abbr: "NG" },
    { name: "Niue", abbr: "NU" },
    { name: "Norfolk Island", abbr: "NF" },
    { name: "Northern Mariana Islands", abbr: "MP" },
    { name: "Norway", abbr: "NO" },
    { name: "Oman", abbr: "OM" },
    { name: "Pakistan", abbr: "PK" },
    { name: "Palau", abbr: "PW" },
    { name: "Palestine", abbr: "PS" },
    { name: "Panama", abbr: "PA" },
    { name: "Papua New Guinea", abbr: "PG" },
    { name: "Paraguay", abbr: "PY" },
    { name: "Peru", abbr: "PE" },
    { name: "Philippines", abbr: "PH" },
    { name: "Pitcairn", abbr: "PN" },
    { name: "Poland", abbr: "PL" },
    { name: "Portugal", abbr: "PT" },
    { name: "Puerto Rico", abbr: "PR" },
    { name: "Qatar", abbr: "QA" },
    { name: "Romania", abbr: "RO" },
    { name: "Russian Federation", abbr: "RU" },
    { name: "Rwanda", abbr: "RW" },
    { name: "Saint Helena Cunha", abbr: "SH" },
    { name: "Saint Lucia", abbr: "LC" },
    { name: "Saint Martin", abbr: "MF" },
    { name: "Samoa", abbr: "WS" },
    { name: "San Marino", abbr: "SM" },
    { name: "Saudi Arabia", abbr: "SA" },
    { name: "Senegal", abbr: "SN" },
    { name: "Serbia", abbr: "RS" },
    { name: "Seychelles", abbr: "SC" },
    { name: "Sierra Leone", abbr: "SL" },
    { name: "Singapore", abbr: "SG" },
    { name: "Sint Maarten", abbr: "SX" },
    { name: "Slovakia", abbr: "SK" },
    { name: "Slovenia", abbr: "SI" },
    { name: "Solomon Islands", abbr: "SB" },
    { name: "Somalia", abbr: "SO" },
    { name: "South Africa", abbr: "ZA" },
    { name: "South Sudan", abbr: "SS" },
    { name: "Spain", abbr: "ES" },
    { name: "Sri Lanka", abbr: "LK" },
    { name: "Sudan", abbr: "SD" },
    { name: "Suriname", abbr: "SR" },
    { name: "Swaziland", abbr: "SZ" },
    { name: "Sweden", abbr: "SE" },
    { name: "Switzerland", abbr: "CH" },
    { name: "Tajikistan", abbr: "TJ" },
    { name: "Thailand", abbr: "TH" },
    { name: "Togo", abbr: "TG" },
    { name: "Tokelau", abbr: "TK" },
    { name: "Tonga", abbr: "TO" },
    { name: "Tunisia", abbr: "TN" },
    { name: "Turkey", abbr: "TR" },
    { name: "Turkmenistan", abbr: "TM" },
    { name: "Tuvalu", abbr: "TV" },
    { name: "Uganda", abbr: "UG" },
    { name: "Ukraine", abbr: "UA" },
    { name: "United Arab Emirates", abbr: "AE" },
    { name: "United Kingdom", abbr: "GB" },
    { name: "United States", abbr: "US" },
    { name: "Uruguay", abbr: "UY" },
    { name: "Uzbekistan", abbr: "UZ" },
    { name: "Vanuatu", abbr: "VU" },
    { name: "Venezuela", abbr: "VE" },
    { name: "Viet Nam", abbr: "VN" },
    { name: "Virgin Islands", abbr: "VG" },
    { name: "Virgin Islands", abbr: "VI" },
    { name: "Wallis and Futuna", abbr: "WF" },
    { name: "Western Sahara", abbr: "EH" },
    { name: "Yemen", abbr: "YE" },
    { name: "Zambia", abbr: "ZM" },
    { name: "Zimbabwe", abbr: "ZW" },
];

module.exports = countries;