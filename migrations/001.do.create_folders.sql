CREATE table folders(
  id INTEGER primary key generated BY DEFAULT as IDENTITY,
  folder_name text not null
);