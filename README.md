# Welcome

So, you've decided to try Codefresh? Welcome on board!

Using this repository we'll help you get up to speed with basic functionality such as: *compiling*, *testing* and *building Docker images*.

This project uses `JavaScript, Selenium, Protractor` to build an application which will eventually become a distributable Docker image.

## Looking around

In the root of this repository you'll find a file named `codefresh.yml`, this is our https://docs.codefresh.io/docs/what-is-the-codefresh-yaml[build descriptor] and it describes the different steps that comprise our process.
Let's quickly review the contents of this file:

### Compiling and testing

To compile and test our code we use Codefresh's https://docs.codefresh.io/docs/steps#section-freestyle[Freestyle step].

The Freestyle step basically let's you say "Hey, Codefresh! Here's a Docker image. Create a new container and run these commands for me, will ya?"

```yml
unit_test:
    title: Unit Tests
    type: composition
    composition:
      version: '2'
      services:
        selenium:
          image: selenium/standalone-chrome:2.46.0
          ports:
            - 4444:4444
    composition_candidates:
      test:
        image: ${{build_image}}
        volumes:
          - /dev/shm:/dev/shm
        environment:
          GITHUB_ACCOUNT: ${{GITHUB_ACCOUNT}}
          GITHUB_PASSWORD: ${{GITHUB_PASSWORD}}
          URL: 'https://codefresh.io'
          SUITE: 'login'
        command: bash -c '/protractor/run-tests.sh'
    on_success:
      metadata:
        set:
          - ${{build_image.imageId}}:
            - CF_QUALITY: true
    on_fail:
      metadata:
        set:
          - ${{build_image.imageId}}:
            - CF_QUALITY: false
```

The `image` field states which image should be used when creating the container (Similar to Travis CI's `language` or circleci`s `machine`).

The `commands` field is how you specify all the commands that you'd like to execute

### Building

To bake our application into a Docker image we use Codefresh's https://docs.codefresh.io/docs/steps#section-build[Build step].

The Build is a simplified abstraction over the Docker build command.

```yml
build_image:
    title: Building Image
    type: build
    dockerfile: Dockerfile
    image_name: codefresh/selenium-test
```

Use the `image_name` field to declare the name of the resulting image (don't forget to change the image owner name from `codefreshdemo` to your own!).

## Using This Example

To use this example:

* Fork this repository to your own [INSERT_SCM_SYSTEM (git, bitbucket)] account.
* Log in to Codefresh using your [INSERT_SCM_SYSTEM (git, bitbucket)] account.
* Click the `Add Service` button.
* Select the forked repository.
* Select the `I have a Codefresh.yml file` option.
* Complete the wizard.
* Rejoice!
