(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),i=a(6),o=(a(0),a(91)),r={id:"approach",title:"Approach to addressing Data Quality and Quality Assurance Processes",author:"Peter Brenton",author_title:"Atlas of Living Australia",author_url:"https://github.com/pbrenton",author_image_url:"https://avatars1.githubusercontent.com/u/8119351?s=460&u=0c79064c6a42ce83f46c5225fd5bc070e1ee900d&v=4",tags:["approach","philosophy","data quality","quality assurance","trust"]},l={permalink:"/ppsr-core/blog/approach",editUrl:"https://github.com/citizen-science-association/ppsr-core/edit/master/blog/2020-07-02-approach.md",source:"@site/blog\\2020-07-02-approach.md",description:'The citizen science domain is often criticized for generating data which has limited scientific value. In some cases such criticism may be fair, but in many cases the citizen science domain is unfairly attributed with producing "poor quality" data without data consumers properly considering factors such as "fitness for use".',date:"2020-07-02T00:00:00.000Z",tags:[{label:"approach",permalink:"/ppsr-core/blog/tags/approach"},{label:"philosophy",permalink:"/ppsr-core/blog/tags/philosophy"},{label:"data quality",permalink:"/ppsr-core/blog/tags/data-quality"},{label:"quality assurance",permalink:"/ppsr-core/blog/tags/quality-assurance"},{label:"trust",permalink:"/ppsr-core/blog/tags/trust"}],title:"Approach to addressing Data Quality and Quality Assurance Processes",readingTime:9.835,truncated:!1},s=[{value:"Data Quality and Fitness for Use - some general principles",id:"data-quality-and-fitness-for-use---some-general-principles",children:[]},{value:"Factors Affecting Trust in Citizen Science Data",id:"factors-affecting-trust-in-citizen-science-data",children:[]}],c={rightToc:s};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'The citizen science domain is often criticized for generating data which has limited scientific value. In some cases such criticism may be fair, but in many cases the citizen science domain is unfairly attributed with producing "poor quality" data without data consumers properly considering factors such as "',Object(o.b)("strong",null,"fitness for use"),'".'),Object(o.b)("p",null,"In general, data users are interested in the following questions when considering trust in data for fitness for use:"),Object(o.b)("ul",null,Object(o.b)("li",null,"Where has the data come from?"),Object(o.b)("li",null,"Who collected it?"),Object(o.b)("li",null,"Is the accuracy and precision of the data adequate for my intended use?"),Object(o.b)("li",null,"Were the collection, treatment methods and equipment suitable for my intended use?"),Object(o.b)("li",null,"Is the data comprehensive & complete?"),Object(o.b)("li",null,"Were the collection and treatment methods applied consistency for the whole dataset?"),Object(o.b)("li",null,"What quality assurance, curation, validation & management processes have been applied to the data?"),Object(o.b)("li",null,"What are the known and implied biases in the data?"),Object(o.b)("li",null,"What conditions apply to using the data?"),Object(o.b)("li",null,"How should the dataset be cited or referenced?"),Object(o.b)("li",null,"How can the data be accessed and in what format(s) is it available?"),Object(o.b)("li",null,"Is a data management plan available for the data?")),Object(o.b)("p",null,"The PPSR-Core project is attempting to address many of the causal factors and underlying issues in respect to data and metadata associated trust in citizen science data. Whilst many of these issues are not unique to citizen science, the citizen science domain is frequently criticised for failing to meet expectations in these areas."),Object(o.b)("h2",{id:"data-quality-and-fitness-for-use---some-general-principles"},"Data Quality and Fitness for Use - some general principles"),Object(o.b)("ul",null,Object(o.b)("li",null,"All datasets have limitations."),Object(o.b)("li",null,"Data quality is largely a relative concept that relates to \u201cfitness for the intended purpose\u201d."),Object(o.b)("li",null,"Fitness for use should be assessed from the integrity of the data rather than from type of source, personalities or reputations."),Object(o.b)("li",null,"Metadata that describes the processes and protocols by which the data was created and treated are critical pieces of information to assist data consumers in making informed choices about fitness for use."),Object(o.b)("li",null,"Accuracy & precision are important for data interpretation and analysis."),Object(o.b)("li",null,"The more accurate a record is, the higher it\u2019s \u201cquality\u201d, as it has more potential for re-use across a wider range of situations."),Object(o.b)("li",null,"Data precision can be reduced for a particular use, but it cannot be enhanced. Therefore the more precice one can be at the point of making a record, the more utility the record has."),Object(o.b)("li",null,"Lack of trust and provenance prejudice often lie at the heart of the criticisms being levelled at citizen science in respect to perceptions of poor quality data."),Object(o.b)("li",null,"Software design is an important factor in improving DQ/QA processes and outcomes, but it is only part of the solution. Project and data owners also need to take responsibility for these and employ a range of off-system solutions.")),Object(o.b)("h2",{id:"factors-affecting-trust-in-citizen-science-data"},"Factors Affecting Trust in Citizen Science Data"),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("strong",null,"Accuracy")),Object(o.b)("td",null,Object(o.b)("strong",null,"How closely a data value for a property represents the real/true value of the property being measured."),Object(o.b)("p",null,Object(o.b)("u",null,"Problem:")," ",Object(o.b)("i",null,"Data may not contain any metadata at the dataset level or meta-attribute information at the record level to describe accuracy for spatial, temporal, taxonomic and/or other aspects of the data. This makes it difficult for data users to interpret whether the data is an accurate representation of what it is purported to be.")),Object(o.b)("p",null,Object(o.b)("strong",null,"Recommended Best Practices")),Object(o.b)("ul",null,Object(o.b)("li",null,"Application developers should incorporate as many measures as possible into the design of the their systems, in both the metadata and observational data, to minimize opportunities for users to enter inaccurate data. These include but are not limited to:"),Object(o.b)("ul",null,Object(o.b)("li",null,"Pre-population of fields where possible and appropriate"),Object(o.b)("li",null,"Locking of pre-populated values where only one value is possible (eg. Single species surveys)"),Object(o.b)("li",null,"Pre-population of date, time and co-ordinate fields derived from image metadata"),Object(o.b)("li",null,"Data type controls for consistent field behavior such as:"),Object(o.b)("ul",null,Object(o.b)("li",null,"Date and time pickers"),Object(o.b)("li",null,"Categorical single and multi-select lists, preferably based on controlled and/or standardized vocabularies."),Object(o.b)("li",null,"Maximum and/or minimum acceptable range validation when appropriate"),Object(o.b)("li",null,"Decimal and integer numeric options used appropriately"),Object(o.b)("li",null,"Mandatory and optional field controls"),Object(o.b)("li",null,"Validation and value constraints on fields"),Object(o.b)("li",null,"Cross-attribute validation and/or options filtering when appropriate"),Object(o.b)("li",null,"etc.")),Object(o.b)("li",null,"For species-based attributes, limiting choices to locally applicable species, linking to identification support tools, etc."),Object(o.b)("li",null,"Auto-population of calculated values with auto-calc algorithm support"),Object(o.b)("li",null,"Making fields that should not be edited, non-editable"),Object(o.b)("li",null,"Mapping behaviors to minimize spatial errors. (eg. spatial out of range warnings, northern/southern hemisphere constraints, longitude range constraints, etc.)"),Object(o.b)("li",null,"Field level help/tool tips"),Object(o.b)("li",null,"Accuracy and precision tagging support on key attributes (eg. Species, spatial)"),Object(o.b)("li",null,"Attribute mapping to industry standards at the database level"),Object(o.b)("li",null,"Data visibility constraint configuration/management"),Object(o.b)("li",null,"Data verification/moderation/curation features")),Object(o.b)("li",null,"Accuracy measures should be included within the data and metadata itself.")))),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("strong",null,"Precision")),Object(o.b)("td",null,Object(o.b)("strong",null,"The range of uncertainty in the measured resolution of a property."),Object(o.b)("p",null,"Measures of the degree of precision in respect to the attribute types: spatial, temporal, taxonomic and/or other aspects of the data can be important when analyzing the data."),Object(o.b)("p",null,Object(o.b)("u",null,"Problem:")," ",Object(o.b)("i",null,"Including precision measures in citizen science projects can seem like an unnecessary complication for public contributors and therefore they are often omitted.")),Object(o.b)("p",null,Object(o.b)("strong",null,"Recommended Best Practices")),Object(o.b)("ul",null,Object(o.b)("li",null,"Precision measures should be included within the data for all key attributes within the observational data to indicate the range of uncertainty in each observational measurement."),Object(o.b)("li",null,"Units of measure should always be included within the database name as well as in the field display label or suffix."),Object(o.b)("li",null,"Dataset metadata should indicate the maximum and minimum range values for precision of each attribute type in the dataset. This should ideally be dynamically derived from the observational data itself and stored as metadata properties that can be conveyed to other data repositories when sharing metadata."),Object(o.b)("li",null,"Precision measures should be included within the observational data at individual record level itself.")))),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("strong",null,"Timeliness")),Object(o.b)("td",null,Object(o.b)("strong",null,"Whether records are temporally relevant to the intended use (eg. Previously present, now absent)."),Object(o.b)("p",null,"Observational data provides information about an observed situation at a specific time in which the subject is either present, absent or in a particular state at that time. This temporal dimension of observational data is very important for many reasons."),Object(o.b)("p",null,Object(o.b)("u",null,"Problem:")," ",Object(o.b)("i",null,"Things change over time and therefore old observations may not be representative of the current state of the subject when the data are interpreted. As data accumulates and/or is aggregated over time, this temporal-state dimension needs to be given profile in the dataset metadata so that it can be effectively accounted for and the data context correctly interpreted.")),Object(o.b)("p",null,Object(o.b)("strong",null,"Recommended Best Practices")),Object(o.b)("ul",null,Object(o.b)("li",null,"Include start and end dates in the dataset metadata to indicate the earliest and latest record dates for observational records."),Object(o.b)("li",null,"Include last update date in the dataset metadata as an empirical indicator of data currency and creation/curation activity."),Object(o.b)("li",null,"Include a dataset status in the dataset metadata as a categorical indicator of data currency and creation/curation activity. This should use a standardized controlled vocabulary of terms.")))),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("strong",null,"Completeness")),Object(o.b)("td",null,Object(o.b)("strong",null,"Whether all of the required data is provided for all records in the dataset."),Object(o.b)("p",null,"It is very common for datasets to contain incomplete records, particularly for attributes which are not mandatory."),Object(o.b)("p",null,Object(o.b)("u",null,"Problem:")," ",Object(o.b)("i",null,"This can particularly be an issue in citizen science projects which try to keep the barrier to public entry as low as possible by minimizing the skills and effort required of public participants as much as possible and minimising the complexity of the tasks they are expected to perform. This can result in omission of the meta-information required for interpretation of the data.")),Object(o.b)("p",null,Object(o.b)("strong",null,"Recommended Best Practices")),Object(o.b)("ul",null,Object(o.b)("li",null,"Database and system design should ensure that all key data attributes are set as mandatory, in particular event attributes such as location and date, as well as any attributes on which calculated values, downstream processes, etc. are dependent."),Object(o.b)("li",null,"If appropriate, use pre-population and multi-layered and cross validation approaches to improve completeness and minimize expectations on users."),Object(o.b)("li",null,"Dataset metadata should include a statement on completeness of the dataset, as text and/or categorical vocabulary-based selection."),Object(o.b)("li",null,"Apply standardized mechanisms to consistently describe the provenance, treatment, DQ & QA curation, as well as data management, access, use and constraints of datasets.")),Object(o.b)("p",null,"Data and software based solutions to this issue are limited and project owners should look mainly to off-system solutions. As a general rule, the more complex the required sampling protocol is, the more effort needs to be put into participant training and support in respect to data acquisition and to data verification, moderation and curation mechanisms, post-acquisition."))),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("strong",null,"Consistency")),Object(o.b)("td",null,Object(o.b)("strong",null,"Whether methods have been applied in the same way for all records."),Object(o.b)("p",null,"Consistent application of sampling protocols in data collection requires knowledge of applicable methodologies and consistency and discipline in their use."),Object(o.b)("p",null,Object(o.b)("u",null,"Problem:")," ",Object(o.b)("i",null,"As more individuals participate in a sampling activity, the risk of getting variability in the application of sampling protocols increases significantly, especially when participating individuals have limited or no training in the protocols.")),Object(o.b)("p",null,Object(o.b)("i",null,"When sampling protocols involve instruments or sensors, regular calibration is important to ensure temporal comparability of data at a location and spatial comparability across locations using different equipment.")),Object(o.b)("p",null,Object(o.b)("strong",null,"Recommended Best Practices")),Object(o.b)("ul",null,Object(o.b)("li",null,"Dataset metadata should include detailed statements on the sampling protocol(s) used, including any variations from published protocols."),Object(o.b)("li",null,"Standardized controlled categorical vocabularies and ontologies should be used wherever possible instead of free-text based descriptors."),Object(o.b)("li",null,"Dataset metadata should include a statement of how consistency issues have been addressed.")),Object(o.b)("p",null,"Data and software based solutions to this issue are limited and project owners should look mainly to off-system solutions. As a general rule, the more complex the required sampling protocol is, the more effort needs to be put into participant training and support in respect to data acquisition and to data verification, moderation and curation mechanisms, post-acquisition."))),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("strong",null,"Validity")),Object(o.b)("td",null,Object(o.b)("strong",null,"Whether records are factually correct."),Object(o.b)("p",null,"Data validity is an observational record level issue which is a function of the interpretation of the observed result by the observer of the thing being observed. For sensor-based observational records, data validity is more a function of the serviceability and calibration of the sensor than of human interpretation of the thing being observed."),Object(o.b)("p",null,Object(o.b)("u",null,"Problem:")," ",Object(o.b)("i",null,"Human observers frequently make mistakes in their interpretations of what they observe and how they record their observations. Sensors and instruments may arguably be more robust and reliable than most human observers, but they can break-down or lose their calibrated accuracy. Systems can't know whether something is factually correct or not, unless there is additional information and rules which can be used by systems to cross-reference and validate recorded observations, for example, using artificial intelligence and machine learning (AI/ML) algorithms.")),Object(o.b)("p",null,Object(o.b)("strong",null,"Recommended Best Practices")),Object(o.b)("ul",null,Object(o.b)("li",null,'Include database level controls on different data types such as those described under "Accuracy" above.'),Object(o.b)("li",null,"Data validation, verification, moderation and curation processes and capabilities need to be built into the data collection and management pipeline, including system design support for such capabilities.")),Object(o.b)("p",null,"Data and software based solutions to this issue are somewhat limited. Project owners should therefore look to augment these with appropriate off-system solutions. Depending on the subject matter and complexity, effort needs to be put into participant training and support in respect to data acquisition and to data verification, moderation and curation mechanisms, post-acquisition.")))),Object(o.b)("h2",null,"References"),Object(o.b)("p",null,"The following references were used to inform the above content:"),Object(o.b)("p",null,'A. Alabri and J. Hunter, "Enhancing the Quality and Trust of Citizen Science Data," 2010 IEEE Sixth International Conference on e-Science, Brisbane, QLD, 2010, pp. 81-88, doi: 10.1109/eScience.2010.33.'),Object(o.b)("p",null,"Chapman, Arthur. (2005). Principles of Data Quality. version 1.0 Report for the Global Biodiversity Information Facility, Copenhagen."),Object(o.b)("p",null,'Er\xe9ndira Aceves\u2010Bueno  Adeyemi S. Adeleye  Marina Feraud  Yuxiong Huang  Mengya Tao  Yi Yang  Sarah E. Anderson, "The Accuracy of Citizen Science Data: A Quantitative Review". The Bulletin of the Ecological Society of America. First published:29 September 2017 https://doi.org/10.1002/bes2.1336'),Object(o.b)("p",null,'J. Hunter, A. Alabri and C. van Ingen, "Assessing the quality and trustworthiness of citizen science data", Special Issue Paper, Wiley Online Library, First published:13 September 2012 https://doi.org/10.1002/cpe.2923'))}u.isMDXComponent=!0},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,h=d["".concat(r,".").concat(p)]||d[p]||b[p]||o;return a?i.a.createElement(h,l(l({ref:t},c),{},{components:a})):i.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);