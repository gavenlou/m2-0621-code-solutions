select "c"."name" as "category",
        count("cM"."filmId")
from "actors"
join "castMembers" as "cM" using ("actorId")
join "filmCategory" using ("filmId")
join "categories" as "c" using ("categoryId")
where "actors"."firstName" = 'Lisa'
and "actors"."lastName" = 'Monroe'
group by "c"."name";
