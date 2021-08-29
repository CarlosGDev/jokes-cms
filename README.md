## Jokes-CMS

## Installtion

1. [Install docker(ubuntu)](https://docs.docker.com/engine/install/ubuntu/)

2. [Run docker as non root user(ubuntu)](https://docs.docker.com/engine/install/linux-postinstall/)

3. [Install docker-compose](https://docs.docker.com/compose/install/)

    3.1 [(read) Description docker coompose file v3](https://docs.docker.com/compose/compose-file/compose-file-v3/)

4. Visual Studio Code Extentions
    
    4.1 Install vscode db extention with name  "Docker Microsoft"

    4.2 Install vscode db extention with name "MySQL cweijan"

6. Build base image: ```docker build --pull --rm -f "base-php-nginx.Dockerfile" -t jokes-cms/base-php-nginx "."```

7. Run ```docker-compose build```

8. Run ```docker-compose up -d```

9. Create DB tables:
```
CREATE TABLE joke (
    id int(11) NOT NULL AUTO_INCREMENT,  
    joketext text,
    jokedate date NOT NULL,   
    authorId int(11) DEFAULT NULL,   
    PRIMARY KEY (`id`) 
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

CREATE TABLE `category` (
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`) 
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

CREATE TABLE joke_category (
    jokeId int(11) NOT NULL,
    categoryId int(11) NOT NULL,
    PRIMARY KEY (`jokeId`,`categoryId`) 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `author` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `email` varchar(255) DEFAULT NULL, 
    `password` varchar(255) DEFAULT NULL,
    `permissions` int(64) NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`) 
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8
```

### Run ```docker-compose down -v --rmi all``` to remove containers, volumes and network and images


### Credits to:
[Docker](https://github.com/BretFisher/php-docker-good-defaults/blob/master/Dockerfile)
[PHP Novice to Ninja](https://github.com/spbooks/phpmysql6)
