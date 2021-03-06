import {setDateToUnixTimeStemp, setMintuesToMiliSecond} from "./dateService";
import {divideZoomUrl} from "./platformService";

export const prapreEditForm = (form, descriptionText, category, session_id) => {
    let formHolder = {...form};

    formHolder = {...formHolder, ...divideZoomUrl(formHolder.platform_url)};

    formHolder.start_date    =   setDateToUnixTimeStemp((formHolder.start_date +' '+ formHolder.start_time));
    const end_date           =   setDateToUnixTimeStemp((formHolder.start_date + setMintuesToMiliSecond(formHolder.duration)));

    formHolder.time_range    =   {start_date: formHolder.start_date, end_date};
    formHolder.session_id    =   session_id;
    formHolder.capacity      =   !formHolder.capacity ? null : parseInt(formHolder.capacity);
    formHolder.description   =   descriptionText;
    formHolder.category      =   category.id ? category.id : category;



    delete formHolder.duration;
    delete formHolder.start_time;
    delete formHolder.start_date;
    delete formHolder.platform_url;

    return formHolder;
};
