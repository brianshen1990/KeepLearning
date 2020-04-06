DROP DATABASE demoFeature;
CREATE SCHEMA demoFeature;
USE demoFeature;
DROP TABLE demo_json;

CREATE TABLE demo_json (id INT NOT NULL AUTO_INCREMENT, jdoc JSON,  PRIMARY KEY (`id`));

INSERT INTO demo_json ( jdoc ) VALUES ( '{"name": "Brian"}' );
SELECT * FROM demo_json;

ALTER TABLE demo_json ADD COLUMN `str_json` VARCHAR(255) NULL DEFAULT NULL AFTER `jdoc`;
INSERT INTO demo_json ( jdoc, str_json ) VALUES ('{"name": "Brian"}', '{"name": "Brian"}' );
SELECT * FROM demo_json;

SELECT JSON_TYPE(jdoc) from demo_json;
SELECT JSON_TYPE(str_json) from demo_json;

INSERT INTO demo_json (jdoc) VALUES ( '{"name": "BrianUpdate", "age": "Unknow"}');
SELECT * FROM demo_json WHERE JSON_EXTRACT(jdoc, '$.name') = "BrianUpdate";
SELECT id from demo_json WHERE JSON_EXTRACT(jdoc, '$.name') = "BrianUpdate";
# 3
UPDATE demo_json SET jdoc = JSON_REPLACE(jdoc, '$.age', 'Always young') WHERE id = 3 ;
SELECT * FROM demo_json WHERE JSON_EXTRACT(jdoc, '$.name') = "BrianUpdate";

SET SQL_SAFE_UPDATES = 0;
UPDATE demo_json SET jdoc = JSON_REPLACE(jdoc, '$.age', 'Always Always young') WHERE JSON_EXTRACT(jdoc, '$.name') = "BrianUpdate" ;
SELECT * FROM demo_json WHERE JSON_EXTRACT(jdoc, '$.name') = "BrianUpdate";

SELECT JSON_EXTRACT('{"id": 14, "name": "Aztalan"}', '$.name');
SELECT JSON_EXTRACT('{"a": 1, "b": 2, "c": [3, 4, 5]}', '$.*');
SELECT JSON_EXTRACT('{"a": 1, "b": 2, "c": [3, 4, 5]}', '$.c[*]');
SELECT JSON_EXTRACT('{"a": {"b": 1}, "c": {"b": 2}}', '$**.b');
SELECT JSON_EXTRACT('[1, 2, 3, 4, 5]', '$[1 to 3]');

SET @j = '["a", {"b": [true, false]}, [10, 20]]';
SELECT JSON_SET(@j, '$[1].b[0]', 1, '$[2][2]', 2);
SELECT JSON_REPLACE(@j, '$[1].b[0]', 1, '$[2][2]', 2);
SELECT @j;
