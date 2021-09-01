select "c"."name" as "country",
        count("city".*) as "totalCities"
from "countries" as "c"
join "cities" as "city" using ("countryId")
group by "c"."countryId"
