mongoexport --db cursodb --collection alumnos -f name
mongoexport --db cursodb --collection alumnos -f age
mongoexport --db cursodb --collection alumnos -f name,age
mongoexport --db cursodb --collection alumnos -f name,age  --query "{name:'Pedro'}"

