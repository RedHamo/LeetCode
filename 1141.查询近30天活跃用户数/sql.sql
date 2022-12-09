select activity_date day , count(DISTINCT user_id) active_users   from Activity 
where activity_date > date_sub('2019-07-27',interval 30 day) and activity_date<='2019-07-27'
group by activity_date
