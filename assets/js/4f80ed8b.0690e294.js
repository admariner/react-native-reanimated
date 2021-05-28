(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),o=(n(0),n(302)),r={id:"animations",title:"Animations",sidebar_label:"Animations"},s={unversionedId:"animations",id:"version-2.1.0/animations",isDocsHomePage:!1,title:"Animations",description:"Animations are first-class citizens in Reanimated 2.",source:"@site/versioned_docs/version-2.1.0/animations.md",slug:"/animations",permalink:"/react-native-reanimated/docs/2.1.0/animations",version:"2.1.0",sidebar_label:"Animations",sidebar:"version-2.1.0/docs",previous:{title:"Shared Values",permalink:"/react-native-reanimated/docs/2.1.0/shared-values"},next:{title:"Events",permalink:"/react-native-reanimated/docs/2.1.0/events"}},l=[{value:"Shared Value Animated Transitions",id:"shared-value-animated-transitions",children:[]},{value:"Animations in <code>useAnimatedStyle</code> hook",id:"animations-in-useanimatedstyle-hook",children:[]},{value:"Interrupting Animated Updates",id:"interrupting-animated-updates",children:[]},{value:"Customizing Animations",id:"customizing-animations",children:[{value:"Timing",id:"timing",children:[]},{value:"Spring",id:"spring",children:[]}]},{value:"Animation Modifiers",id:"animation-modifiers",children:[]},{value:"Animating Layout Properties",id:"animating-layout-properties",children:[]},{value:"Animating Non-Style Properties",id:"animating-non-style-properties",children:[]}],d={toc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Animations are first-class citizens in Reanimated 2.\nThe library comes bundled with a number of animation helper methods that makes it very easy to go from immediate property updates into animated ones."),Object(o.b)("p",null,"In the previous article about ",Object(o.b)("a",{parentName:"p",href:"shared-values"},"Shared Values")," we learned about ",Object(o.b)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook, that allows for creating an association between Reanimated code and view properties.\nWe also learned how to perform animated transitions of Shared Values.\nThis, however, is not the only way how animations can be started.\nOn top of that Reanimated provides a number of animation modifiers and ways how animations can be customized.\nIn this article we explore this and other methods that can be used to perform animated view updates."),Object(o.b)("h2",{id:"shared-value-animated-transitions"},"Shared Value Animated Transitions"),Object(o.b)("p",null,"One of the easiest ways of starting an animation in Reanimated 2, is by making an animated transition of a Shared Value.\nAnimated Shared Value updates require just a tiny change compared to immediate updates.\nLet us recall the example from the previous article, where we'd update a Shared Value with some random number on every button tap:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"{15}","{15}":!0},"import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';\n\nfunction Box() {\n  const offset = useSharedValue(0);\n\n  const animatedStyles = useAnimatedStyle(() => {\n    return {\n      transform: [{ translateX: offset.value * 255 }],\n    };\n  });\n\n  return (\n    <>\n      <Animated.View style={[styles.box, animatedStyles]} />\n      <Button onPress={() => (offset.value = Math.random())} title=\"Move\" />\n    </>\n  );\n}\n")),Object(o.b)("p",null,"In the above example we make immediate updates to the ",Object(o.b)("inlineCode",{parentName:"p"},"offset")," Shared Value upon a button click.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"offset")," value is then mapped to a view translation using ",Object(o.b)("inlineCode",{parentName:"p"},"useAnimatedStyle"),'.\nAs a result, when we tap on the "Move" button the animated box jumps to a new, random location as presented below:'),Object(o.b)("p",null,Object(o.b)("img",{src:n(305).default})),Object(o.b)("p",null,"With Reanimated 2, such Shared Value updates can be transformed to an animated updates by wrapping the target value using one of the animation helpers, e.g., ",Object(o.b)("a",{parentName:"p",href:"api/withTiming"},Object(o.b)("inlineCode",{parentName:"a"},"withTiming"))," or ",Object(o.b)("a",{parentName:"p",href:"api/withSpring"},Object(o.b)("inlineCode",{parentName:"a"},"withSpring")),".\nThe only change that we can do now, is to wrap random offset value in ",Object(o.b)("inlineCode",{parentName:"p"},"withSpring")," call as shown below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},'<Button\n  onPress={() => {\n    offset.value = withSpring(Math.random());\n  }}\n  title="Move"\n/>\n')),Object(o.b)("p",null,"This way, instead of assigning a number to Shared Value, we make an animation object which is then used to run updates on the Shared Value until it reaches the target.\nAs a result the ",Object(o.b)("inlineCode",{parentName:"p"},"offset")," Shared Value transitions smoothly between the current and the newly assigned random number, which results in a nice spring-based animation in between those states:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(306).default})),Object(o.b)("h2",{id:"animations-in-useanimatedstyle-hook"},"Animations in ",Object(o.b)("inlineCode",{parentName:"h2"},"useAnimatedStyle")," hook"),Object(o.b)("p",null,"Animated Shared Value transitions are not the only way to initiate and run animations.\nIt is often the case that we'd like to animate properties that are not directly mapped onto a Shared Value.\nFor that, in Reanimated we allow for animations to be specified directly in ",Object(o.b)("a",{parentName:"p",href:"api/useAnimatedStyle"},Object(o.b)("inlineCode",{parentName:"a"},"useAnimatedStyle"))," hook.\nIn order to do this you can use the same animation helper methods from Reanimated API, but instead of using it when updating a Shared Value you use it to wrap the style value property:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"{5}","{5}":!0},"const animatedStyles = useAnimatedStyle(() => {\n  return {\n    transform: [\n      {\n        translateX: withSpring(offset.value * 255),\n      },\n    ],\n  };\n});\n")),Object(o.b)("p",null,"As you can see, the only change compared to the example from the previous section is that we wrapped the value provided to ",Object(o.b)("inlineCode",{parentName:"p"},"translateX")," offset in ",Object(o.b)("inlineCode",{parentName:"p"},"withSpring")," call.\nThis tells the Reanimated engine that all updates made to ",Object(o.b)("inlineCode",{parentName:"p"},"translateX")," offset should be animated using spring.\nWith this change added, we no longer need to animate the ",Object(o.b)("inlineCode",{parentName:"p"},"offset"),' Shared Value updates, and can keep those updates being "immediate":'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'<Button onPress={() => (offset.value = Math.random())} title="Move" />\n')),Object(o.b)("p",null,"As a result we will get the exact same behavior as when animating the ",Object(o.b)("inlineCode",{parentName:"p"},"offset")," value update.\nHowever, in this case we move the control over how value updates need to be performed from the place where we make Shared Value amends to the place where we define the View styles.\nThis approach is more convenient in many cases, especially when view properties are derived from Shared Value as opposed to the Shared Value being directly mapped to given styles.\nAlso, keeping all the aspects of view styles and transitions colocated often makes it easier to keep control over your components' code.\nIt forces you to have everything defined in one place vs scattered around the codebase allowing for animated transitions being triggered from anywhere."),Object(o.b)("h2",{id:"interrupting-animated-updates"},"Interrupting Animated Updates"),Object(o.b)("p",null,"Animated UI updates, by definition, take time to perform.\nIt is often undesirable to freeze user interactions with the App and wait for transitions to finish.\nWhile allowing the user to interact with the screen while style properties are being animated, the framework needs to support a way for those animations to be interrupted or reconfigured as they go.\nThis is the case for Reanimated animations API as well.\nWhenever you make animated updates of Shared Values, or you specify animations in ",Object(o.b)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook, those animations are fully interruptible.\nIn the former case, when you make an update to Shared Value that is being animated, the framework won't wait for the previous animation to finish, but will immediately initiate a new transition starting from the current position of the previous animation.\nInterruptions also work correctly for animations defined in ",Object(o.b)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook.\nWhen the style is updated and the target value for a given property has changed compared to the last time when the style hook was run, the new animation will launch immediately starting from the current position of the property."),Object(o.b)("p",null,"We believe that the described behavior, when it comes to interruptions, is desirable in the majority of the usecases, and hence we made it the default.\nIn case you'd like to wait with the next animation until the previous one is finished, or in the case you'd like to cancel currently running animation prior to starting a new one, you can still do it using animation callbacks in the former, or ",Object(o.b)("a",{parentName:"p",href:"api/cancelAnimation"},Object(o.b)("inlineCode",{parentName:"a"},"cancelAnimation"))," method in the latter case."),Object(o.b)("p",null,"To illustrate how interruptions perform in practice, please take a look at the below video, where we run the example presented earlier, but make much more frequent taps on the button in order to trigger value changes before the animation settles:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(307).default})),Object(o.b)("h2",{id:"customizing-animations"},"Customizing Animations"),Object(o.b)("p",null,"Reanimated currently provides three built-in animation helpers: ",Object(o.b)("a",{parentName:"p",href:"api/withTiming"},Object(o.b)("inlineCode",{parentName:"a"},"withTiming")),", ",Object(o.b)("a",{parentName:"p",href:"api/withSpring"},Object(o.b)("inlineCode",{parentName:"a"},"withSpring")),", and ",Object(o.b)("a",{parentName:"p",href:"api/withDecay"},Object(o.b)("inlineCode",{parentName:"a"},"withDecay")),".\nAs there are ways of expanding that with your own, custom animations (animation helpers are built on top of the ",Object(o.b)("a",{parentName:"p",href:"worklets"},"worklets")," abstraction), we are not yet ready to document that as we still plan some changes of that part of the API.\nHowever, the built-in methods along with the animation modifiers (that we discuss later on), already provides a great flexibility.\nBelow we discuss some of the most common configuration options of the animation helpers, and we refer to the documentation page of ",Object(o.b)("a",{parentName:"p",href:"api/withTiming"},Object(o.b)("inlineCode",{parentName:"a"},"withTiming"))," and ",Object(o.b)("a",{parentName:"p",href:"api/withSpring"},Object(o.b)("inlineCode",{parentName:"a"},"withSpring"))," for the complete set of parameters."),Object(o.b)("p",null,"Both animation helper methods share a similar structure.\nThey take target value as the first parameter, configuration object as the second, and finally a callback method as the last parameter.\nStarting from the end, callback is a method that runs when the animation is finished, or when the animation is interrupted/cancelled.\nCallback is run with a single argument \u2013 a boolean indicating whether the animation has finished executing without cancellation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'<Button\n  onPress={() => {\n    offset.value = withSpring(Math.random(), {}, (finished) => {\n      if (finished) {\n        console.log("ANIMATION ENDED");\n      } else {\n        console.log("ANIMATION GOT CANCELLED");\n      }\n    });\n  }}\n  title="Move"\n/>\n')),Object(o.b)("h3",{id:"timing"},"Timing"),Object(o.b)("p",null,"As it comes to the configuration options, those are different depending on the animation we run.\nFor timing-based animations, we can provide a duration and an easing method.\nThe easing parameter allows to control how fast the animation progresses along the specified time duration.\nYou may wish for the animation to accelerate fast and then slow down towards the end, or to start slowly, then accelerate and slow down again at the end.\nEasing can be described using ",Object(o.b)("a",{parentName:"p",href:"https://javascript.info/bezier-curve"},"bezier curve")," thanks to ",Object(o.b)("inlineCode",{parentName:"p"},"Easing.bezier")," method exported from the Reanimated package.\nBut in most of the cases it is enough to use ",Object(o.b)("inlineCode",{parentName:"p"},"Easing.in"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Easing.out")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Easing.inOut")," to adjust the timing curve at the start, end or at the both ends respectively.\nThe default duration for the timing animation is 300ms, and the default easing is an in-out quadratic curve (",Object(o.b)("inlineCode",{parentName:"p"},"Easing.inOut(Easing.quad)"),"):"),Object(o.b)("p",null,Object(o.b)("img",{src:n(314).default})),Object(o.b)("p",null,"Here is how to start a timing animation with a custom configuration:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"{4-5}","{4-5}":!0},"import { Easing, withTiming } from 'react-native-reanimated';\n\noffset.value = withTiming(0, {\n  duration: 500,\n  easing: Easing.out(Easing.exp),\n});\n")),Object(o.b)("p",null,"You may want to visit ",Object(o.b)("a",{parentName:"p",href:"https://easings.net/"},"easings.net")," and check various easing visualizations.\nTo learn how to apply these please refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/master/src/reanimated2/Easing.ts"},"Easing.ts")," file where all the easing related helper methods are defined."),Object(o.b)("h3",{id:"spring"},"Spring"),Object(o.b)("p",null,"Unlike timing, spring-based animation does not take a duration as a parameter.\nInstead the time it takes for the spring to run is determined by the spring physics (which is configurable), initial velocity, and the distance to travel.\nBelow we show an example of how a custom spring animation can be defined and how it compares to the default spring settings.\nPlease review ",Object(o.b)("a",{parentName:"p",href:"api/withSpring"},Object(o.b)("inlineCode",{parentName:"a"},"withSpring"))," documentation for the complete list of configurable options."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import Animated, {\n  withSpring,\n  useAnimatedStyle,\n  useSharedValue,\n} from 'react-native-reanimated';\n\nfunction Box() {\n  const offset = useSharedValue(0);\n\n  const defaultSpringStyles = useAnimatedStyle(() => {\n    return {\n      transform: [{ translateX: withSpring(offset.value * 255) }],\n    };\n  });\n\n  const customSpringStyles = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: withSpring(offset.value * 255, {\n            damping: 20,\n            stiffness: 90,\n          }),\n        },\n      ],\n    };\n  });\n\n  return (\n    <>\n      <Animated.View style={[styles.box, defaultSpringStyles]} />\n      <Animated.View style={[styles.box, customSpringStyles]} />\n      <Button onPress={() => (offset.value = Math.random())} title=\"Move\" />\n    </>\n  );\n}\n")),Object(o.b)("p",null,Object(o.b)("img",{src:n(315).default})),Object(o.b)("p",null,"Unlike in the previous example, here we define animation in the ",Object(o.b)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook.\nThis makes it possible to use a single Shared Value but map that to two View's styles."),Object(o.b)("h2",{id:"animation-modifiers"},"Animation Modifiers"),Object(o.b)("p",null,"Beside the ability of adjusting animation options, another way of customizing animations is by using animation modifiers.\nCurrently, Reanimated exposes three modifiers: ",Object(o.b)("a",{parentName:"p",href:"api/withDelay"},Object(o.b)("inlineCode",{parentName:"a"},"withDelay")),", ",Object(o.b)("a",{parentName:"p",href:"api/withSequence"},Object(o.b)("inlineCode",{parentName:"a"},"withSequence"))," and ",Object(o.b)("a",{parentName:"p",href:"api/withRepeat"},Object(o.b)("inlineCode",{parentName:"a"},"withRepeat")),".\nAs the name suggests, ",Object(o.b)("inlineCode",{parentName:"p"},"withDelay")," modifier makes the provided animation to start with a given delay, the ",Object(o.b)("inlineCode",{parentName:"p"},"withSequence")," modifier allows a number of animations to be provided and will make them run one after another.\nFinally, the ",Object(o.b)("inlineCode",{parentName:"p"},"withRepeat")," modifier allows for the provided animation to be repeated several times."),Object(o.b)("p",null,"Modifiers typically take one or more animation objects with optional configuration as an input, and return an object that represents the modified animation.\nThis makes it possible to wrap existing animation helpers (or custom helpers), or make a chain of modifiers when necessary.\nPlease refer to the documentation of each of the modifier methods to learn about the ways how they can be parameterized."),Object(o.b)("p",null,"Let us now exercise the use of modifiers in practice and build animation that causes a rectangular view to wobble upon a button click.\nWe start by rendering the actual view and defining rotation Shared Value that we then use to run the animation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';\n\nfunction WobbleExample(props) {\n  const rotation = useSharedValue(0);\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [{ rotateZ: `${rotation.value}deg` }],\n    };\n  });\n\n  return (\n    <>\n      <Animated.View style={[styles.box, animatedStyle]} />\n      <Button\n        title=\"wobble\"\n        onPress={() => {\n          // will be filled in later\n        }}\n      />\n    </>\n  );\n}\n")),Object(o.b)("p",null,"In the above example we make a Shared Value that will represent the rotation of the view.\nThen, in ",Object(o.b)("inlineCode",{parentName:"p"},"useAnimatedStyle"),' we map that variable to the rotation attribute by adding a "deg" suffix to indicate the angle is expressed in degrees.\nLet us see how we can now make the rotation animate back and forth using modifiers, here is what we can put in the button\'s ',Object(o.b)("inlineCode",{parentName:"p"},"onPress")," handler:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"rotation.value = withRepeat(withTiming(10), 6, true)\n")),Object(o.b)("p",null,"The above code will cause the view to run six repetitions of timing animation between the initial state of the ",Object(o.b)("inlineCode",{parentName:"p"},"rotation")," value (that is ",Object(o.b)("inlineCode",{parentName:"p"},"0"),") and value ",Object(o.b)("inlineCode",{parentName:"p"},"10"),".\nThe third parameter passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"withRepeat")," method makes the animation to run in reverse every other repetition.\nSetting the reverse flag to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," will result in the rotation doing three full loops (from ",Object(o.b)("inlineCode",{parentName:"p"},"0")," to ",Object(o.b)("inlineCode",{parentName:"p"},"10"),' and back).\nAt the end of all six repetitions the rotation will go back to zero.\nHere is what will happen when we click on the "wobble" button:'),Object(o.b)("p",null,Object(o.b)("img",{src:n(316).default})),Object(o.b)("p",null,"The above code makes the rotation only go between ",Object(o.b)("inlineCode",{parentName:"p"},"0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"10")," degrees.\nIn order for the view to also swing to the left, we could start from ",Object(o.b)("inlineCode",{parentName:"p"},"-10")," and go to ",Object(o.b)("inlineCode",{parentName:"p"},"10")," degrees.\nBut we can't just change the initial value to ",Object(o.b)("inlineCode",{parentName:"p"},"-10"),", because in such a case the rectangle will be skewed from the beginning.\nOne way to solve this is to use a ",Object(o.b)("inlineCode",{parentName:"p"},"withSequence")," modifier and starting from ",Object(o.b)("inlineCode",{parentName:"p"},"0"),", do the first animation to ",Object(o.b)("inlineCode",{parentName:"p"},"-10"),", then swing the view from ",Object(o.b)("inlineCode",{parentName:"p"},"-10")," to ",Object(o.b)("inlineCode",{parentName:"p"},"10")," several times, and finally go from ",Object(o.b)("inlineCode",{parentName:"p"},"-10")," back to ",Object(o.b)("inlineCode",{parentName:"p"},"0"),".\nHere is how the ",Object(o.b)("inlineCode",{parentName:"p"},"onPress")," handler will look like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"rotation.value = withSequence(\n  withTiming(-10, { duration: 50 }),\n  withRepeat(withTiming(ANGLE, { duration: 100 }), 6, true),\n  withTiming(0, { duration: 50 })\n);\n")),Object(o.b)("p",null,"In the above code we put three animations in a sequence.\nFirst, we start a timing to the minimum swing position (",Object(o.b)("inlineCode",{parentName:"p"},"-10")," degrees), after that we start a loop that goes between ",Object(o.b)("inlineCode",{parentName:"p"},"-10")," and ",Object(o.b)("inlineCode",{parentName:"p"},"10")," degrees six times (same as in the previous implementation).\nFinally, we add a finishing timing animation that makes the rotation go back to zero.\nFor the surrounding timing animation we pass a duration that is half of the duration we use for the looped animation.\nIt is because those animations make half the distance, thus this way we maintain the similar velocity for the initial, middle and finishing swings.\nBelow we present the end result:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(317).default})),Object(o.b)("h2",{id:"animating-layout-properties"},"Animating Layout Properties"),Object(o.b)("p",null,"Reanimated makes it possible for animations to be executed by completely avoiding the main React Native's JavaScript thread.\nThanks to the animation runner being completely isolated, the application logic (rendering components, fetching and processing data, etc) cannot impact the performance of animation and hence allows to avoid many unpredictable frame drops.\nDevelopers who are familiar with React Native's ",Object(o.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/animated"},"Animated API")," and the concept of ",Object(o.b)("a",{parentName:"p",href:"https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated"},"Native Driver")," may already understand this benefit, and also know that the use of Native Driver is limited to some subset of view properties.\nThis, however, is not the case in Reanimated which supports animations of ",Object(o.b)("strong",{parentName:"p"},"all")," native properties without generating any load on the main JavaScript thread (including layout properties like ",Object(o.b)("inlineCode",{parentName:"p"},"width"),", ",Object(o.b)("inlineCode",{parentName:"p"},"flex"),", etc.).\nThis, in fact, was already the case since the first version of Reanimated but we'd like to emphasize that again as we receive questions around this topic from time to time."),Object(o.b)("p",null,"When discussing animated updates of layout properties, however, it is important to note that even though we avoid calling into the main JavaScript thread, some of the layout updates can be really expensive and cause significant delays despite being run on the native threads.\nAn example where the layout property update can be expensive is a change of ",Object(o.b)("inlineCode",{parentName:"p"},"flex-direction")," on a container with many items.\nSuch a change will cause each of the items to reposition and also change their dimensions.\nThe change of the dimensions for each of the views may trigger further layout recalculations of the nested views down to the leaf nodes.\nAs you can see, a single property change can trigger a lot of recomputation.\nIt may perform just fine when we need to fire it once, but if we decided to run such computation during animation for every frame, the outcome may not be satisfactory especially on low-end devices.\nAs we work to improve performance of complex layout updates in Reanimated 2, when you experience  issues that are the effects of heavy layout computation on every frame, we recommend that you try Reanimated's ",Object(o.b)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/transitions"},"Transition API")," or React Native's ",Object(o.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/layoutanimation"},"LayoutAnimation API"),"."),Object(o.b)("h2",{id:"animating-non-style-properties"},"Animating Non-Style Properties"),Object(o.b)("p",null,"View styles are definitely the most frequently animated properties out there.\nHowever, in some usecases it is important to also animate properties that do not belong to styles.\nThis is especially important if we have native components that expose native properties that we want to animate.\nIn such a case we want to avoid roundtrips to the main JavaScript thread in order to update such properties while animating.\nThankfully, Reanimated allows for that, but as the properties do not belong to styles we can't just use the ",Object(o.b)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook.\nFor this purpose Reanimated exposes a separate hook called ",Object(o.b)("inlineCode",{parentName:"p"},"useAnimatedProps"),".\nIt works in a very similar way to ",Object(o.b)("inlineCode",{parentName:"p"},"useAnimatedStyle")," but instead of expecting a method that returns the animated styles, we expect the returned object to contain properties that we want to animate.\nThen, in order to hook animated props to a view, we provide the resulting object as ",Object(o.b)("inlineCode",{parentName:"p"},"animatedProps"),' property to the "Animated" version of the view type we want to render (e.g. ',Object(o.b)("inlineCode",{parentName:"p"},"Animated.View"),").\nPlease check the documentation of ",Object(o.b)("a",{parentName:"p",href:"api/useAnimatedProps"},Object(o.b)("inlineCode",{parentName:"a"},"useAnimatedProps"))," hook for usage examples."))}p.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),p=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,u=m["".concat(r,".").concat(h)]||m[h]||c[h]||o;return n?i.a.createElement(u,s(s({ref:t},d),{},{components:n})):i.a.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},305:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sv-immediate-163a607a1256501020dc30d515d78647.gif"},306:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sv-spring-8af0692299a5863f1b8cef55e187431e.gif"},307:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sv-interruption-74d74b266b4840a5f3ebc4cb7779c90f.gif"},314:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/easeInOutQuad-9b64cfd158bcecb3f04abb09e22fb051.png"},315:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/twosprings-4d81dda6c4ee2124a9b801679cc78f1b.gif"},316:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swing-c96a79837f84ca2b7510e64367653c43.gif"},317:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/wobble-6ca91e5708c8023e5d278551b82bd66c.gif"}}]);