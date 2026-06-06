'use strict';
var $p;
var $fileLevelThis = this;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $Long(lo, hi) {
  this.l = lo;
  this.h = hi;
}
$p = $Long.prototype;
$p.toString = (function() {
  return $s_RTLong__toString__I__I__T(this.l, this.h);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), Object.getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.aj() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.n5();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.j(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.j.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.l();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.l.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.n6(x0);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__J(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__I__I__O__D(arg0.l, arg0.h, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (((arg0 !== arg2) || (((arg3 - arg1) >>> 0) > (arg4 >>> 0)))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $bL(arg0, arg1) {
  return new $Long(arg0, arg1);
}
var $bL0 = $bL(0, 0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $bL0 : arg0);
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.l = (function() {
  return $systemIdentityHashCode(this);
});
$p.j = (function(that) {
  return (this === that);
});
$p.i = (function() {
  var i = this.l();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.i();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.c[i] = null;
    }
  } else {
    this.c = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.ad = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
});
$p.aj = (function() {
  return new $ac_O(this.c.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.c[i] = false;
    }
  } else {
    this.c = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.ad = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
});
$p.aj = (function() {
  return new $ac_Z(this.c.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Uint16Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.ad = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aj = (function() {
  return new $ac_C(this.c.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Int8Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.ad = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aj = (function() {
  return new $ac_B(this.c.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Int16Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.ad = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aj = (function() {
  return new $ac_S(this.c.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Int32Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.ad = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aj = (function() {
  return new $ac_I(this.c.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.c = new Int32Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.ad = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.aj = (function() {
  return new $ac_J(this.c.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Float32Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.ad = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aj = (function() {
  return new $ac_F(this.c.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Float64Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.ad = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aj = (function() {
  return new $ac_D(this.c.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass, (arrayEncodedName === "J"));
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isLongArray, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    x: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (isLongArray ? ((array) => {
    var len = (array.length | 0);
    var result = new arrayClass(len);
    var u = result.c;
    for (var i = 0; (i < len); i = ((i + 1) | 0)) {
      var srcElem = array[i];
      u[(i << 1)] = srcElem.l;
      u[(((i << 1) + 1) | 0)] = srcElem.h;
    }
    return result;
  }) : (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array))));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.c = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.c[i] = null;
      }
    } else {
      this.c = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.ad = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
  });
  $p.aj = (function() {
    return new ArrayClass(this.c.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    x: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), false, ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p($bL0, "J", "long", $ac_J, Int32Array);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_jl_System$Streams$() {
  this.il = null;
  this.kA = null;
  $n_jl_System$Streams$ = this;
  this.il = new $c_jl_JSConsoleBasedPrintStream(false);
  this.kA = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  bd: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.21.0";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.hb = null;
  this.im = null;
  $n_jl_System$SystemProperties$ = this;
  this.hb = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.im = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.jW = (function(key, default$1) {
  if ((this.hb !== null)) {
    var dict = this.hb;
    return ((!(!$m_jl_Utils$Cache$().ip.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.im.jW(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  be: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.ip = null;
  $n_jl_Utils$Cache$ = this;
  this.ip = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bg: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bh: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.i6 = (function(array) {
  return ((array instanceof $ac_O) ? array.c.length : ((array instanceof $ac_Z) ? array.c.length : ((array instanceof $ac_C) ? array.c.length : ((array instanceof $ac_B) ? array.c.length : ((array instanceof $ac_S) ? array.c.length : ((array instanceof $ac_I) ? array.c.length : ((array instanceof $ac_J) ? ((array.c.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.c.length : ((array instanceof $ac_D) ? array.c.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bi: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.kV = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.c.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.c[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  bj: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().mz(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().my(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().l9(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().l8(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().gW(value);
}
function $s_RTLong__fromUnsignedInt__I__J(value) {
  return $bL(value, 0);
}
function $s_RTLong__fromInt__I__J(value) {
  var hi = (value >> 31);
  return $bL(value, hi);
}
function $s_RTLong__clz__I__I__I(lo, hi) {
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(lo)) | 0));
}
function $s_RTLong__toFloat__I__I__F(lo, hi) {
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__I__I__D(lo, hi) {
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__I__I__I(lo, hi) {
  return lo;
}
function $s_RTLong__toString__I__I__T(lo, hi) {
  return $m_RTLong$().kr(lo, hi);
}
function $s_RTLong__bitsToDouble__I__I__O__D(lo, hi, fpBitsDataView) {
  fpBitsDataView.setInt32(0, lo, true);
  fpBitsDataView.setInt32(4, hi, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__I__I__I__I__J(alo, ahi, blo, bhi) {
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, bhi) + Math.imul(ahi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sub__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo - blo) | 0);
  var hi = ((((ahi - bhi) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sar__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : (hi >> n));
  var hi$1 = (((32 & n) === 0) ? (hi >> n) : (hi >> 31));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shr__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : ((hi >>> n) | 0));
  var hi$1 = (((32 & n) === 0) ? ((hi >>> n) | 0) : 0);
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shl__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (lo << n) : 0);
  var hi$1 = (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> (~n)) | 0) | (hi << n)) : (lo << n));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__xor__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo ^ blo);
  var hi = (ahi ^ bhi);
  return $bL(lo, hi);
}
function $s_RTLong__and__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo & blo);
  var hi = (ahi & bhi);
  return $bL(lo, hi);
}
function $s_RTLong__or__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo | blo);
  var hi = (ahi | bhi);
  return $bL(lo, hi);
}
function $s_RTLong__geu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__gtu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ltu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) !== 0);
}
function $s_RTLong__equals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) === 0);
}
/** @constructor */
function $c_RTLong$() {
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.kr = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = (+Math.floor((1.0E-9 * approxNum)));
    var approxRem = ((rlo - Math.imul(1000000000, (approxQuot | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = ((approxRem - 1000000000) | 0);
    }
    var this$7 = approxRem;
    var remStr = ("" + this$7);
    var $x_1 = approxQuot;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.gW = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    return $bL(0, (-2147483648));
  } else if ((value >= 9.223372036854776E18)) {
    return $bL((-1), 2147483647);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((2.3283064365386963E-10 * value) | 0.0);
    var hi = (((value < 0.0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return $bL(rawLo, hi);
  }
});
$p.l8 = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  } else {
    var $x_1 = this.h1(rlo, rhi, rlo$1, rhi$1, true);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  }
});
$p.l9 = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo, hi);
    }
  } else {
    return this.h1(alo, ahi, blo, bhi, true);
  }
});
$p.my = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + ((((lo$2 & rlo$1) | ((lo$2 | rlo$1) & (~lo$3))) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((lo$2 - rlo$1) | 0);
      var hi$4 = ((((hi$2 - rhi$1) | 0) + ((((~lo$2) & rlo$1) | ((~(lo$2 ^ rlo$1)) & lo$4)) >> 31)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  } else {
    var $x_1 = this.h1(rlo, rhi, rlo$1, rhi$1, false);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if ((ahi < 0)) {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.mz = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + ((((lo$2 & blo) | ((lo$2 | blo) & (~lo$3))) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((lo$2 - blo) | 0);
      var hi$4 = ((((hi$2 - bhi) | 0) + ((((~lo$2) & blo) | ((~(lo$2 ^ blo)) & lo$4)) >> 31)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else {
    return this.h1(alo, ahi, blo, bhi, false);
  }
});
$p.h1 = (function(alo, ahi, blo, bhi, askQuotient) {
  var quot1 = 0;
  if ((bhi >= 0)) {
    var lo = (blo << 1);
    var hi = (((blo >>> 31) | 0) | (bhi << 1));
    if (((ahi === hi) ? ((alo >>> 0) >= (lo >>> 0)) : ((ahi >>> 0) > (hi >>> 0)))) {
      quot1 = 2;
      var lo$1 = ((alo - lo) | 0);
      var hi$1 = ((((ahi - hi) | 0) + ((((~alo) & lo) | ((~(alo ^ lo)) & lo$1)) >> 31)) | 0);
      var rem1_$_lo = lo$1;
      var rem1_$_hi = hi$1;
    } else {
      var rem1_$_lo = alo;
      var rem1_$_hi = ahi;
    }
  } else {
    var rem1_$_lo = alo;
    var rem1_$_hi = ahi;
  }
  var rem1LTUb = ((rem1_$_hi === bhi) ? ((rem1_$_lo >>> 0) < (blo >>> 0)) : ((rem1_$_hi >>> 0) < (bhi >>> 0)));
  if (askQuotient) {
    if (rem1LTUb) {
      var lo$2 = quot1;
      return $bL(lo$2, 0);
    } else {
      var lo$3 = ((1 + quot1) | 0);
      return $bL(lo$3, 0);
    }
  } else if (rem1LTUb) {
    return $bL(rem1_$_lo, rem1_$_hi);
  } else {
    var lo$4 = ((rem1_$_lo - blo) | 0);
    var hi$2 = ((((rem1_$_hi - bhi) | 0) + ((((~rem1_$_lo) & blo) | ((~(rem1_$_lo ^ blo)) & lo$4)) >> 31)) | 0);
    return $bL(lo$4, hi$2);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  bl: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.jU = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.c.length !== ys.c.length)) {
    return false;
  }
  var len = xs.c.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().a(xs.c[i], ys.c[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bm: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.K();
  while (it.v()) {
    f.h(it.s());
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.S() === 0) ? (("" + start) + end) : $thiz.i0($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).ae.L);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.ae;
  if ((start.length !== 0)) {
    jsb.L = (("" + jsb.L) + start);
  }
  var it = $thiz.K();
  if (it.v()) {
    var obj = it.s();
    jsb.L = (("" + jsb.L) + obj);
    while (it.v()) {
      if ((sep.length !== 0)) {
        jsb.L = (("" + jsb.L) + sep);
      }
      var obj$1 = it.s();
      jsb.L = (("" + jsb.L) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.L = (("" + jsb.L) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.iw = null;
  this.fu = null;
  this.iw = head;
  this.fu = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.lt = (function() {
  return this.iw.fi().K();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  c3: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.ix = null;
  $n_sc_StringOps$ = this;
  this.ix = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.ix));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  cb: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.iA = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().lC($m_jl_System$SystemProperties$().jW("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.iA = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  cg: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.a = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.lh(x, y) : ((x instanceof $Char) ? this.lf(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.lh = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.lg(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $Long)) {
      var $x_1 = $uJ(xn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = y.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.lg = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $Long)) {
      var $x_1 = $uJ(yn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      return (x2 === ((4.294967296E9 * x3_$_hi) + (x3_$_lo >>> 0.0)));
    } else {
      return (false && yn.j(x2));
    }
  } else if ((xn instanceof $Long)) {
    var $x_2 = $uJ(xn);
    var x3$2_$_lo = $x_2.l;
    var x3$2_$_hi = $x_2.h;
    if ((yn instanceof $Long)) {
      var $x_3 = $uJ(yn);
      var x2$3_$_lo = $x_3.l;
      var x2$3_$_hi = $x_3.h;
      return (((x3$2_$_lo ^ x2$3_$_lo) | (x3$2_$_hi ^ x2$3_$_hi)) === 0);
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * x3$2_$_hi) + (x3$2_$_lo >>> 0.0)) === x3$3);
    } else {
      return (false && yn.j($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.lf = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $Long)) {
      var $x_1 = $uJ(y);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = xc.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  cP: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
/** @constructor */
function $c_sr_Scala3RunTime$() {
}
$p = $c_sr_Scala3RunTime$.prototype = new $h_O();
$p.constructor = $c_sr_Scala3RunTime$;
/** @constructor */
function $h_sr_Scala3RunTime$() {
}
$h_sr_Scala3RunTime$.prototype = $p;
$p.kU = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.h0 = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cT: 1
}));
var $n_sr_Scala3RunTime$;
function $m_sr_Scala3RunTime$() {
  if ((!$n_sr_Scala3RunTime$)) {
    $n_sr_Scala3RunTime$ = new $c_sr_Scala3RunTime$();
  }
  return $n_sr_Scala3RunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.fj = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.c;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.c[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.c[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.kL = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.t(), (x.r() + "("), ",", ")");
});
$p.fq = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.c.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  cU: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.lI = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.la = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().gW(dv);
    var lv_$_lo = $x_1.l;
    var lv_$_hi = $x_1.h;
    if ((((4.294967296E9 * lv_$_hi) + (lv_$_lo >>> 0.0)) === dv)) {
      return (lv_$_lo ^ lv_$_hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.E = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.la((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.lI($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.lA = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  cW: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
function $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product($thiz, x, self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return new $c_T1(x);
  }
  if ((self instanceof $c_T1)) {
    return new $c_T2(x, self.eC);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.M, self.U);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.ay, self.ak, self.al);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.dS, self.az, self.aA, self.aB);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.eQ, self.dT, self.dU, self.dV, self.dW);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.eR, self.dX, self.dY, self.dZ, self.e0, self.e1);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.eS, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.eT, self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ee);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.eU, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek, self.el, self.em);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.eD, self.aJ, self.aK, self.aL, self.aM, self.aN, self.aO, self.aP, self.aQ, self.aI);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.eE, self.aT, self.aU, self.aV, self.aW, self.aX, self.aY, self.aZ, self.b0, self.aR, self.aS);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.eF, self.b4, self.b5, self.b6, self.b7, self.b8, self.b9, self.ba, self.bb, self.b1, self.b2, self.b3);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.eG, self.bg, self.bh, self.bi, self.bj, self.bk, self.bl, self.bm, self.bn, self.bc, self.bd, self.be, self.bf);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.eH, self.bt, self.bu, self.bv, self.bw, self.bx, self.by, self.bz, self.bA, self.bo, self.bp, self.bq, self.br, self.bs);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.eI, self.bH, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bB, self.bC, self.bD, self.bE, self.bF, self.bG);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.eJ, self.bW, self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.c3, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bV);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.eK, self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9, self.ca, self.cb);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.eL, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cA, self.ck, self.cl, self.cm, self.cn, self.co, self.cp, self.cq, self.cr, self.cs);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.eM, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cS, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.eN, self.d3, self.d5, self.d6, self.d7, self.d8, self.d9, self.da, self.db, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d4);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.eO, self.dm, self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dn, self.dp);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.eP, self.dH, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dI, self.dJ, self.dK]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.p()) | 0));
  arr.c[0] = x;
  var src = xxl.N;
  var length = xxl.p();
  src.ad(0, arr, 1, length);
  return new $c_sr_TupleXXL(arr);
}
function $p_sr_Tuples$__specialCaseTail__s_Product__s_Product($thiz, self) {
  matchResult34$1: {
    var $x_1;
    if ((self instanceof $c_T1)) {
      var $x_1 = $m_T$package$EmptyTuple$();
      break matchResult34$1;
    }
    if ((self instanceof $c_T2)) {
      var $x_1 = new $c_T1(self.U);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.ak, self.al);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.az, self.aA, self.aB);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.dT, self.dU, self.dV, self.dW);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.dX, self.dY, self.dZ, self.e0, self.e1);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.e2, self.e3, self.e4, self.e5, self.e6, self.e7);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ee);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.ef, self.eg, self.eh, self.ei, self.ej, self.ek, self.el, self.em);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.aJ, self.aK, self.aL, self.aM, self.aN, self.aO, self.aP, self.aQ, self.aI);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.aT, self.aU, self.aV, self.aW, self.aX, self.aY, self.aZ, self.b0, self.aR, self.aS);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.b4, self.b5, self.b6, self.b7, self.b8, self.b9, self.ba, self.bb, self.b1, self.b2, self.b3);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.bg, self.bh, self.bi, self.bj, self.bk, self.bl, self.bm, self.bn, self.bc, self.bd, self.be, self.bf);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.bt, self.bu, self.bv, self.bw, self.bx, self.by, self.bz, self.bA, self.bo, self.bp, self.bq, self.br, self.bs);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.bH, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bB, self.bC, self.bD, self.bE, self.bF, self.bG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.bW, self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.c3, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bV);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9, self.ca, self.cb);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cA, self.ck, self.cl, self.cm, self.cn, self.co, self.cp, self.cq, self.cr, self.cs);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cS, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.d3, self.d5, self.d6, self.d7, self.d8, self.d9, self.da, self.db, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d4);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.dm, self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dn, self.dp);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.dH, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dI, self.dJ, self.dK);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.p() === 23)) {
    var elems = xxl.N;
    return new $c_T22(elems.c[1], elems.c[2], elems.c[3], elems.c[4], elems.c[5], elems.c[6], elems.c[7], elems.c[8], elems.c[9], elems.c[10], elems.c[11], elems.c[12], elems.c[13], elems.c[14], elems.c[15], elems.c[16], elems.c[17], elems.c[18], elems.c[19], elems.c[20], elems.c[21], elems.c[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.N.c.length - 1) | 0));
    var src = xxl.N;
    var length = ((xxl.N.c.length - 1) | 0);
    src.ad(1, arr$1, 0, length);
    return new $c_sr_TupleXXL(arr$1);
  }
}
/** @constructor */
function $c_sr_Tuples$() {
}
$p = $c_sr_Tuples$.prototype = new $h_O();
$p.constructor = $c_sr_Tuples$;
/** @constructor */
function $h_sr_Tuples$() {
}
$h_sr_Tuples$.prototype = $p;
$p.l1 = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.mP = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  cX: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  cY: 1
}), $noIsInstance);
/** @constructor */
function $c_sjs_js_Any$ObjectCompanionOps$() {
}
$p = $c_sjs_js_Any$ObjectCompanionOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$ObjectCompanionOps$;
/** @constructor */
function $h_sjs_js_Any$ObjectCompanionOps$() {
}
$h_sjs_js_Any$ObjectCompanionOps$.prototype = $p;
$p.ls = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  d0: 1
}));
var $n_sjs_js_Any$ObjectCompanionOps$;
function $m_sjs_js_Any$ObjectCompanionOps$() {
  if ((!$n_sjs_js_Any$ObjectCompanionOps$)) {
    $n_sjs_js_Any$ObjectCompanionOps$ = new $c_sjs_js_Any$ObjectCompanionOps$();
  }
  return $n_sjs_js_Any$ObjectCompanionOps$;
}
/** @constructor */
function $c_sjs_js_ArrayOps$() {
}
$p = $c_sjs_js_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOps$;
/** @constructor */
function $h_sjs_js_ArrayOps$() {
}
$h_sjs_js_ArrayOps$.prototype = $p;
$p.lv = (function(this$, elem, from) {
  var len = (this$.length | 0);
  var i = from;
  while ((i < len)) {
    if ($m_sr_BoxesRunTime$().a(elem, this$[i])) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.ky = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.K();
  while (((i < len) && it.v())) {
    b.push(new $c_T2(this$[i], it.s()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.kz = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.ax = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.h(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  d1: 1
}));
var $n_sjs_js_ArrayOps$;
function $m_sjs_js_ArrayOps$() {
  if ((!$n_sjs_js_ArrayOps$)) {
    $n_sjs_js_ArrayOps$ = new $c_sjs_js_ArrayOps$();
  }
  return $n_sjs_js_ArrayOps$;
}
/** @constructor */
function $c_sjs_js_ArrayOpsCommon$() {
}
$p = $c_sjs_js_ArrayOpsCommon$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOpsCommon$;
/** @constructor */
function $h_sjs_js_ArrayOpsCommon$() {
}
$h_sjs_js_ArrayOpsCommon$.prototype = $p;
$p.b = (function(left, right) {
  var leftLength = (left.length | 0);
  var rightLength = (right.length | 0);
  var result = new Array(((leftLength + rightLength) | 0));
  var i = 0;
  while (true) {
    if ((i !== leftLength)) {
      result[i] = left[i];
      i = ((1 + i) | 0);
      continue;
    }
    break;
  }
  var i$1 = 0;
  while (true) {
    if ((i$1 !== rightLength)) {
      result[((i$1 + leftLength) | 0)] = right[i$1];
      i$1 = ((1 + i$1) | 0);
      continue;
    }
    break;
  }
  return result;
});
var $d_sjs_js_ArrayOpsCommon$ = new $TypeData().i($c_sjs_js_ArrayOpsCommon$, "scala.scalajs.js.ArrayOpsCommon$", ({
  d2: 1
}));
var $n_sjs_js_ArrayOpsCommon$;
function $m_sjs_js_ArrayOpsCommon$() {
  if ((!$n_sjs_js_ArrayOpsCommon$)) {
    $n_sjs_js_ArrayOpsCommon$ = new $c_sjs_js_ArrayOpsCommon$();
  }
  return $n_sjs_js_ArrayOpsCommon$;
}
/** @constructor */
function $c_sjs_js_WrappedDictionary$Cache$() {
  this.iJ = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.iJ = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  d6: 1
}));
var $n_sjs_js_WrappedDictionary$Cache$;
function $m_sjs_js_WrappedDictionary$Cache$() {
  if ((!$n_sjs_js_WrappedDictionary$Cache$)) {
    $n_sjs_js_WrappedDictionary$Cache$ = new $c_sjs_js_WrappedDictionary$Cache$();
  }
  return $n_sjs_js_WrappedDictionary$Cache$;
}
/** @constructor */
function $c_sjs_js_special_package$() {
}
$p = $c_sjs_js_special_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_special_package$;
/** @constructor */
function $h_sjs_js_special_package$() {
}
$h_sjs_js_special_package$.prototype = $p;
$p.g = (function(properties) {
  var result = ({});
  properties.g4(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.M] = pair$2$2.U;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  d7: 1
}));
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$();
  }
  return $n_sjs_js_special_package$;
}
/** @constructor */
function $c_sjs_js_timers_package$() {
}
$p = $c_sjs_js_timers_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
}
$h_sjs_js_timers_package$.prototype = $p;
$p.mI = (function(interval, body) {
  return setTimeout((() => {
    body.fi();
  }), interval);
});
$p.kZ = (function(handle) {
  clearTimeout(handle);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  d8: 1
}));
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$();
  }
  return $n_sjs_js_timers_package$;
}
/** @constructor */
function $c_sjsr_Compat$() {
}
$p = $c_sjsr_Compat$.prototype = new $h_O();
$p.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
$h_sjsr_Compat$.prototype = $p;
$p.fo = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.gt;
  } else {
    var result = [];
    seq.g4(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  d9: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
/** @constructor */
function $c_sjsr_package$() {
}
$p = $c_sjsr_package$.prototype = new $h_O();
$p.constructor = $c_sjsr_package$;
/** @constructor */
function $h_sjsr_package$() {
}
$h_sjsr_package$.prototype = $p;
$p.f = (function(array) {
  var len = array.c.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.c[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  da: 1
}));
var $n_sjsr_package$;
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$();
  }
  return $n_sjsr_package$;
}
/** @constructor */
function $c_s_util_CommandLineParser$() {
}
$p = $c_s_util_CommandLineParser$.prototype = new $h_O();
$p.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {
}
$h_s_util_CommandLineParser$.prototype = $p;
$p.mK = (function(err) {
  var where = ((err.k0() === 0) ? "" : ((err.k0() === 1) ? " after first argument" : ((" after " + err.k0()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.n7());
  $m_s_Console$().mp().lD((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  db: 1
}));
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if ((!$n_s_util_CommandLineParser$)) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.hd = null;
  this.hd = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.i = (function() {
  return (("DynamicVariable(" + this.hd) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  dd: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.q = (function(hash, data) {
  var h = this.ki(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.ki = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.Y = (function(hash, length) {
  return this.go((hash ^ length));
});
$p.go = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.w = (function(x, seed, ignorePrefix) {
  var arr = x.p();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.r()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.q(h, $f_T__hashCode__I(x.r()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.q(h, $m_sr_Statics$().E(x.k(i)));
      i = ((1 + i) | 0);
    }
    return this.Y(h, arr);
  }
});
$p.kX = (function(x, seed, caseClassName) {
  var arr = x.p();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.r()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.q(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.q(h, $m_sr_Statics$().E(x.k(i)));
      i = ((1 + i) | 0);
    }
    return this.Y(h, arr);
  }
});
$p.mU = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.K();
  while (iterator.v()) {
    var x = iterator.s();
    var h = $m_sr_Statics$().E(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.q(h$2, a);
  h$2 = this.q(h$2, b);
  h$2 = this.ki(h$2, c);
  return this.Y(h$2, n);
});
$p.mo = (function(xs, seed) {
  var it = xs.K();
  var h = seed;
  if ((!it.v())) {
    return this.Y(h, 0);
  }
  var x0 = it.s();
  if ((!it.v())) {
    return this.Y(this.q(h, $m_sr_Statics$().E(x0)), 1);
  }
  var x1 = it.s();
  var initial = $m_sr_Statics$().E(x0);
  h = this.q(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().E(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.v()) {
    h = this.q(h, prev);
    var hash = $m_sr_Statics$().E(it.s());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.q(h, hash);
      i = ((1 + i) | 0);
      while (it.v()) {
        h = this.q(h, $m_sr_Statics$().E(it.s()));
        i = ((1 + i) | 0);
      }
      return this.Y(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.go(this.q(this.q(h0, rangeDiff), prev));
});
$p.jN = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().i6(a);
  switch (l) {
    case 0: {
      return this.Y(h, 0);
      break;
    }
    case 1: {
      return this.Y(this.q(h, $m_sr_Statics$().E($m_sr_ScalaRunTime$().fj(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().E($m_sr_ScalaRunTime$().fj(a, 0));
      h = this.q(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().E($m_sr_ScalaRunTime$().fj(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.q(h, prev);
        var hash = $m_sr_Statics$().E($m_sr_ScalaRunTime$().fj(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.q(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.q(h, $m_sr_Statics$().E($m_sr_ScalaRunTime$().fj(a, i)));
            i = ((1 + i) | 0);
          }
          return this.Y(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.go(this.q(this.q(h0, rangeDiff), prev));
    }
  }
});
$p.mv = (function(start, step, last, seed) {
  return this.go(this.q(this.q(this.q(seed, start), step), last));
});
$p.lw = (function(a, seed) {
  var h = seed;
  var l = a.u();
  switch (l) {
    case 0: {
      return this.Y(h, 0);
      break;
    }
    case 1: {
      return this.Y(this.q(h, $m_sr_Statics$().E(a.F(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().E(a.F(0));
      h = this.q(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().E(a.F(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.q(h, prev);
        var hash = $m_sr_Statics$().E(a.F(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.q(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.q(h, $m_sr_Statics$().E(a.F(i)));
            i = ((1 + i) | 0);
          }
          return this.Y(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.go(this.q(this.q(h0, rangeDiff), prev));
    }
  }
});
$p.lG = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.G())) {
    elems.gZ();
  }
  return ((rangeState === 2) ? this.mv(initial, rangeDiff, prev, seed) : this.Y(h, n));
});
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__fbm$1__I__I__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, FbmOctaves$2, domainPeriod$1, FbmGain$2, domainPos) {
  var acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(0.0);
  var freq = 1;
  var amp = 1.0;
  var totalAmp = 0.0;
  var o = 0;
  while ((o < FbmOctaves$2)) {
    var pd = Math.imul(domainPeriod$1, freq);
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_3 = acc;
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().g6();
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$().jE;
    var a1$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jL(domainPos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fl(), freq);
    var a2$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec3$().fh($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(pd), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(pd));
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().ks(fn$proxy1);
    acc = $x_4.jK($x_3, $x_2.g2($x_1.ij($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((WgslFn$_this.kk(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ")"))), amp));
    totalAmp = (totalAmp + amp);
    freq = (freq << 1);
    amp = (amp * FbmGain$2);
    o = ((1 + o) | 0);
  }
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lk($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().kF(acc, totalAmp)));
}
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeShade$1__I__D__Ltrivalibs_graphics_painter_Painter__D__I__Ltrivalibs_graphics_painter_Shade($thiz, FbmOctaves$1, FbmGain$1, p$1, NoiseScale$1, domainPeriod) {
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = reg;
  try {
    var uv = ctx.fR.Q("uv");
    var AssignTarget_this = ctx.fS.aH("worldPos");
    var value$proxy1 = ctx.fR.Q("position");
    var x0 = (((("  " + AssignTarget_this.ai) + " = ") + value$proxy1.d) + ";");
    var AssignTarget_this$2 = ctx.fS.hT;
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gY().h8(uv));
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
    var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gY().kx(uv);
    var value$proxy2 = $x_4.kS($x_3, $x_2.jV($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().i7().ii((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().i5(1.0)) + " - ") + e$proxy2.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(1.0));
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, (((("  " + AssignTarget_this$2.ai) + " = ") + value$proxy2.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = prev;
  }
  program.fQ = $x_1;
  var array$1 = reg.av;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var d$2 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = reg$2;
  try {
    var n = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
    var x0$2 = n.ab($p_Lsketches_rooms_gridceiling_GridCeiling$package$__fbm$1__I__I__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, FbmOctaves$1, domainPeriod, FbmGain$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jL(ctx$2.ff.Q("worldPos"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fl(), NoiseScale$1)));
    var AssignTarget_this$1 = ctx$2.fg.aH("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().g3($m_Ltrivalibs_graphics_math_gpu_vec3$().gU(n), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(1.0));
    var $x_5 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$2, (((("  " + AssignTarget_this$1.ai) + " = ") + value$proxy3.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = prev$2;
  }
  program.fP = $x_5;
  var array$3 = reg$2.av;
  var len$1 = (array$3.length | 0);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$3[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var b = program.fQ;
  var b$1 = program.fP;
  var helperFns$proxy1 = program.fm();
  var id = p$1.O;
  p$1.O = ((1 + p$1.O) | 0);
  var names = [];
  var dict = ({});
  var i$2 = 0;
  while ((i$2 < (names.length | 0))) {
    dict[names[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var names$2 = [];
  var dict$2 = ({});
  var i$2$1 = 0;
  while ((i$2$1 < (names$2.length | 0))) {
    dict$2[names$2[i$2$1]] = i$2$1;
    i$2$1 = ((1 + i$2$1) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["worldPos"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, "", sd.au, sd.at, fragBuiltinParams);
  var args$proxy1 = $m_sr_ScalaRunTime$().fq(new ($d_sjs_js_Any.r().C)([baseWgsl]));
  console.log(...$m_sjsr_Compat$().fo(args$proxy1));
  var module = p$1.e.createShaderModule(({
    "code": baseWgsl
  }));
  var formats = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], []));
  var sizes = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], []));
  var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
  var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
  var attributes = [];
  var i$3 = 0;
  while ((i$3 < (formats.length | 0))) {
    var value$2 = i$3;
    var value$3 = (offsets[i$3] | 0);
    var s = formats[i$3];
    attributes.push(({
      "shaderLocation": value$2,
      "offset": value$3,
      "format": s
    }));
    i$3 = ((1 + i$3) | 0);
  }
  var vbl = ({
    "arrayStride": stride,
    "attributes": attributes
  });
  var bgls = [];
  return new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, null, null, $m_Ltrivalibs_graphics_shader_layouts$().aw(p$1.e, bgls), false, dict, dict$2);
}
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$2, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().kR(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy1 = vl.iN.fp(v$3);
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.k(0);
    var value = nestedValues.k(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.k(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.k(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.k(1);
    var value$4 = nestedValues$2.k(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.k(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.aq.length | 0))) {
    var n = (mesh$proxy1.aq[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy1 = vertexCount;
  var buffer = new ArrayBuffer(Math.imul(20, count$proxy1));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy1);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy1.aq.length | 0))) {
      var arr = mesh$proxy1.aq[fi];
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy1 = vi;
        var offset$proxy6 = Math.imul(20, index$proxy1);
        var x1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy6);
        f(x0, x1);
        vi = ((1 + vi) | 0);
        si = ((1 + si) | 0);
      }
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, null);
  } else {
    var idxBuf = [];
    var base = 0;
    fi = 0;
    while ((fi < (mesh$proxy1.aq.length | 0))) {
      var arr$2 = mesh$proxy1.aq[fi];
      var n$2 = (arr$2.length | 0);
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy2 = vi;
        var offset$proxy7 = Math.imul(20, index$proxy2);
        var x1$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy7);
        f(x0$1, x1$1);
        vi = ((1 + vi) | 0);
        si$2 = ((1 + si$2) | 0);
      }
      if ((n$2 === 3)) {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
      } else {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
        idxBuf.push(base, ((2 + base) | 0), ((3 + base) | 0));
      }
      base = ((base + n$2) | 0);
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.mf(idxBuf, vertexCount));
  }
  return p$2.ll($x_1, (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel($thiz, p$3, w, h, faces, shade) {
  var shape$1 = p$3.fn($p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$3, faces), shade, "none", (void 0));
  return p$3.h2(w, h, (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), shape$1, (void 0), (void 0), (void 0));
}
/** @constructor */
function $c_Lsketches_rooms_gridceiling_GridCeiling$package$() {
}
$p = $c_Lsketches_rooms_gridceiling_GridCeiling$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_gridceiling_GridCeiling$package$;
/** @constructor */
function $h_Lsketches_rooms_gridceiling_GridCeiling$package$() {
}
$h_Lsketches_rooms_gridceiling_GridCeiling$package$.prototype = $p;
$p.a4 = (function(c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
});
$p.ko = (function(n, length, xCenter, startZ, step, gridY, sw, sh, tileWorld, vTileCount) {
  var perStripV = ((2.0 * sh) + sw);
  var vFull = (vTileCount * perStripV);
  var vH = (sh / vFull);
  var vB = (sw / vFull);
  var perStripVn = (perStripV / vFull);
  var faces = [];
  var i = 0;
  while ((i < n)) {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().i1(new $c_Ltrivalibs_graphics_math_cpu_Vec3(xCenter, gridY, (startZ + (i * step))), length, sh, sw);
    var vb = (i * perStripVn);
    var f = ((tileWorld, vb, vH) => ((c$2, uvw$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().a4(c$2, (c$2.n / tileWorld), (vb + (uvw$2.m * vH)))))(tileWorld, vb, vH);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0 = box.f1;
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    var $x_3 = f(x0, x1);
    var x0$1 = box.es;
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_2 = f(x0$1, x1$1);
    var x0$2 = box.et;
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    var $x_1 = f(x0$2, x1$2);
    var x0$3 = box.f2;
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
    faces.push($x_4.a3($x_3, $x_2, $x_1, f(x0$3, x1$3)));
    var f$1 = ((tileWorld, vb, vH) => ((c$2$1, uvw$2$1) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().a4(c$2$1, (c$2$1.n / tileWorld), ((vb + vH) + (uvw$2$1.m * vH)))))(tileWorld, vb, vH);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$4 = box.f0;
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
    var $x_7 = f$1(x0$4, x1$4);
    var x0$5 = box.er;
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_6 = f$1(x0$5, x1$5);
    var x0$6 = box.eq;
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_5 = f$1(x0$6, x1$6);
    var x0$7 = box.eZ;
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    faces.push($x_8.a3($x_7, $x_6, $x_5, f$1(x0$7, x1$7)));
    var f$2 = ((tileWorld, vb, vH, vB) => ((c$2$2, uvw$2$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().a4(c$2$2, (c$2$2.n / tileWorld), ((vb + (2.0 * vH)) + (uvw$2$2.o * vB)))))(tileWorld, vb, vH, vB);
    var $x_12 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$8 = box.es;
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_11 = f$2(x0$8, x1$8);
    var x0$9 = box.eq;
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_10 = f$2(x0$9, x1$9);
    var x0$10 = box.er;
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_9 = f$2(x0$10, x1$10);
    var x0$11 = box.et;
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    faces.push($x_12.a3($x_11, $x_10, $x_9, f$2(x0$11, x1$11)));
    i = ((1 + i) | 0);
  }
  return faces;
});
$p.jS = (function(n, length, zCenter, startX, step, gridY, sw, sh, tileWorld, vTileCount) {
  var perStripV = ((2.0 * sh) + sw);
  var vFull = (vTileCount * perStripV);
  var vH = (sh / vFull);
  var vB = (sw / vFull);
  var perStripVn = (perStripV / vFull);
  var faces = [];
  var i = 0;
  while ((i < n)) {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().i1(new $c_Ltrivalibs_graphics_math_cpu_Vec3((startX + (i * step)), gridY, zCenter), sw, sh, length);
    var vb = (i * perStripVn);
    var f = ((tileWorld, vb, vH) => ((c$2, uvw$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().a4(c$2, (c$2.o / tileWorld), (vb + (uvw$2.m * vH)))))(tileWorld, vb, vH);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0 = box.eZ;
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    var $x_3 = f(x0, x1);
    var x0$1 = box.eq;
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_2 = f(x0$1, x1$1);
    var x0$2 = box.es;
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_1 = f(x0$2, x1$2);
    var x0$3 = box.f1;
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    faces.push($x_4.a3($x_3, $x_2, $x_1, f(x0$3, x1$3)));
    var f$1 = ((tileWorld, vb, vH) => ((c$2$1, uvw$2$1) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().a4(c$2$1, (c$2$1.o / tileWorld), ((vb + vH) + (uvw$2$1.m * vH)))))(tileWorld, vb, vH);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$4 = box.f2;
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
    var $x_7 = f$1(x0$4, x1$4);
    var x0$5 = box.et;
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    var $x_6 = f$1(x0$5, x1$5);
    var x0$6 = box.er;
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_5 = f$1(x0$6, x1$6);
    var x0$7 = box.f0;
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
    faces.push($x_8.a3($x_7, $x_6, $x_5, f$1(x0$7, x1$7)));
    var f$2 = ((tileWorld, vb, vH, vB) => ((c$2$2, uvw$2$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().a4(c$2$2, (c$2$2.o / tileWorld), ((vb + (2.0 * vH)) + (uvw$2$2.n * vB)))))(tileWorld, vb, vH, vB);
    var $x_12 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$8 = box.es;
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_11 = f$2(x0$8, x1$8);
    var x0$9 = box.eq;
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_10 = f$2(x0$9, x1$9);
    var x0$10 = box.er;
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_9 = f$2(x0$10, x1$10);
    var x0$11 = box.et;
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    faces.push($x_12.a3($x_11, $x_10, $x_9, f$2(x0$11, x1$11)));
    i = ((1 + i) | 0);
  }
  return faces;
});
$p.h3 = (function(size, centerXZ, y, normal, tileWorld) {
  var center$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(centerXZ, y, centerXZ);
  var f = ((pos$2, _$1$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().a4(pos$2, (pos$2.n / tileWorld), (pos$2.o / tileWorld)));
  var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
  var n = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var x = n.m;
  if (((+Math.abs(x)) > 0.999)) {
    var up = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  } else {
    var up = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  }
  var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), up, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n);
  var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), size);
  var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), size);
  var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), center$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.hx)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.hy));
  var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
  var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
  var $x_3 = f(tlPos, x1);
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
  var $x_2 = f(blPos, x1$1);
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
  var $x_1 = f(brPos, x1$2);
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
  return [$x_4.a3($x_3, $x_2, $x_1, f(trPos, x1$3))];
});
$p.jP = (function(size, height) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().i1(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * height), 0.0), size, height, size);
  var f = ((c$2, uvw$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().a4(c$2, uvw$2.n, (0.0 + (0.2 * uvw$2.o))));
  var $x_24 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.eZ;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_23 = f(x0, x1);
  var x0$1 = box.f1;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_22 = f(x0$1, x1$1);
  var x0$2 = box.f2;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_21 = f(x0$2, x1$2);
  var x0$3 = box.f0;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_20 = $x_24.a3($x_23, $x_22, $x_21, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().a4(c$2$1, uvw$2$1.n, (0.2 + (0.2 * uvw$2$1.m))));
  var $x_19 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.f1;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_18 = f$1(x0$4, x1$4);
  var x0$5 = box.es;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_17 = f$1(x0$5, x1$5);
  var x0$6 = box.et;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_16 = f$1(x0$6, x1$6);
  var x0$7 = box.f2;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_15 = $x_19.a3($x_18, $x_17, $x_16, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().a4(c$2$2, uvw$2$2.n, (0.4 + (0.2 * uvw$2$2.m))));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.f0;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_13 = f$2(x0$8, x1$8);
  var x0$9 = box.er;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_12 = f$2(x0$9, x1$9);
  var x0$10 = box.eq;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_11 = f$2(x0$10, x1$10);
  var x0$11 = box.eZ;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_10 = $x_14.a3($x_13, $x_12, $x_11, f$2(x0$11, x1$11));
  var f$3 = ((c$2$3, uvw$2$3) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().a4(c$2$3, uvw$2$3.o, (0.6000000000000001 + (0.2 * uvw$2$3.m))));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$12 = box.eZ;
  var x1$12 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_8 = f$3(x0$12, x1$12);
  var x0$13 = box.eq;
  var x1$13 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_7 = f$3(x0$13, x1$13);
  var x0$14 = box.es;
  var x1$14 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_6 = f$3(x0$14, x1$14);
  var x0$15 = box.f1;
  var x1$15 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_5 = $x_9.a3($x_8, $x_7, $x_6, f$3(x0$15, x1$15));
  var f$4 = ((c$2$4, uvw$2$4) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().a4(c$2$4, uvw$2$4.o, (0.8 + (0.2 * uvw$2$4.m))));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$16 = box.f2;
  var x1$16 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_3 = f$4(x0$16, x1$16);
  var x0$17 = box.et;
  var x1$17 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_2 = f$4(x0$17, x1$17);
  var x0$18 = box.er;
  var x1$18 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$4(x0$18, x1$18);
  var x0$19 = box.f0;
  var x1$19 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  return [$x_20, $x_15, $x_10, $x_5, $x_4.a3($x_3, $x_2, $x_1, f$4(x0$19, x1$19))];
});
$p.mC = (function() {
  var canvas = document.getElementById("canvas");
  $m_Ltrivalibs_graphics_painter_Painter$().lx(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$10) => {
    var rowCount = $doubleToInt((+Math.floor(170.0)));
    var colCount = $doubleToInt((+Math.floor(170.0)));
    var gridStep = (340.0 / rowCount);
    var gridStart = ((-170.0) + (0.5 * gridStep));
    var p$proxy3 = (28.0 / gridStep);
    var $x_1 = $m_RTLong$().gW((+Math.round(p$proxy3)));
    var x_$_lo = $x_1.l;
    var x_$_hi = $x_1.h;
    var x$1 = $doubleToInt(((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0)));
    var TileCells = ((x$1 > 1) ? x$1 : 1);
    var tileWorld = (TileCells * gridStep);
    var p$proxy4 = (0.125 * tileWorld);
    var $x_2 = $m_RTLong$().gW((+Math.round(p$proxy4)));
    var x$2_$_lo = $x_2.l;
    var x$2_$_hi = $x_2.h;
    var x$3 = $doubleToInt(((4.294967296E9 * x$2_$_hi) + (x$2_$_lo >>> 0.0)));
    var noisePeriod = ((x$3 > 1) ? x$3 : 1);
    var NoiseScale = (noisePeriod / tileWorld);
    var noiseBakeShade = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeShade$1__I__D__Ltrivalibs_graphics_painter_Painter__D__I__Ltrivalibs_graphics_painter_Shade(this, 4, 0.3, p$10, NoiseScale, noisePeriod);
    var gridTileU = $doubleToInt((24.0 * tileWorld));
    var gridTileV = $doubleToInt((24.0 * (1.75 * TileCells)));
    var planeTilePx = $doubleToInt((24.0 * tileWorld));
    var rowTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$10, gridTileU, gridTileV, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ko(TileCells, tileWorld, (0.5 * tileWorld), gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells), noiseBakeShade);
    var colTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$10, gridTileU, gridTileV, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().jS(TileCells, tileWorld, (0.5 * tileWorld), gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells), noiseBakeShade);
    var groundTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$10, planeTilePx, planeTilePx, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().h3(tileWorld, (0.5 * tileWorld), 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), tileWorld), noiseBakeShade);
    var ceilTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$10, planeTilePx, planeTilePx, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().h3(tileWorld, (0.5 * tileWorld), 20.0, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), tileWorld), noiseBakeShade);
    var boxTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$10, 1024, 1024, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().jP(7.0, 20.5), noiseBakeShade);
    var rowForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$10, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ko(rowCount, 340.0, 0.0, gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells));
    var colForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$10, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().jS(colCount, 340.0, 0.0, gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells));
    var groundForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$10, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().h3(340.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), tileWorld));
    var ceilForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$10, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().h3(340.0, 0.0, 20.0, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().B(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), tileWorld));
    var boxForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$10, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().jP(7.0, 20.5));
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var $x_5 = $m_sjsr_package$();
        var AssignTarget_this = ctx$2.fS.hT;
        var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ku(ctx$2.jy.Q("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jZ(), $m_Ltrivalibs_graphics_math_gpu_vec4$().g3(ctx$2.fR.Q("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().g6(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        var $x_4 = AssignTarget_this.ai;
        var $x_3 = value$proxy4.d;
        var AssignTarget_this$2 = ctx$2.fS.aH("uv");
        var value$proxy5 = ctx$2.fR.Q("uv");
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_5.f(new ($d_T.r().C)([(((("  " + $x_4) + " = ") + $x_3) + ";"), (((("  " + AssignTarget_this$2.ai) + " = ") + value$proxy5.d) + ";")]))), "", "\n", "");
      }));
      var d = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = reg;
      try {
        var $x_6 = body$proxy5.h(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = prev;
      }
      program$3.fQ = $x_6;
      $m_sjs_js_ArrayOps$().ax(reg.av, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$7) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$7, data$3);
      }))(program$3)));
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
        var n = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
        var c = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("c");
        var $x_9 = $m_sjsr_package$();
        var $x_8 = n.ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().g6().ij($m_Ltrivalibs_graphics_math_gpu_expr$package$().fh($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$1.ff.Q("uv"), ctx$2$1.ex.Q("samp"))));
        var $x_7 = c.ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().kJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().g2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jJ(n, 0.5), 1.0), 0.5)));
        var AssignTarget_this$1 = ctx$2$1.fg.aH("color");
        var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_vec4$().g3($m_Ltrivalibs_graphics_math_gpu_vec3$().gU(c), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_9.f(new ($d_T.r().C)([$x_8, $x_7, (((("  " + AssignTarget_this$1.ai) + " = ") + value$proxy6.d) + ";")]))), "", "\n", "");
      }));
      var d$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = reg$2;
      try {
        var $x_10 = body$proxy7.h(ctx$2$2);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = prev$2;
      }
      program$3.fP = $x_10;
      $m_sjs_js_ArrayOps$().ax(reg$2.av, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$8) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$8, data$3$1);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.h(program);
    var b = program.fQ;
    var b$1 = program.fP;
    var helperFns$proxy2 = program.fm();
    var id = p$10.O;
    p$10.O = ((1 + p$10.O) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().b(["mvp"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []));
    var dict = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
    var dict$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy2);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["mvp"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).hL.Z()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).aG.Z()], [])));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.au, sd.at, fragBuiltinParams);
    var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy2 = $m_sr_ScalaRunTime$().fq(new ($d_sjs_js_Any.r().C)([wgsl]));
    console.log(...$m_sjsr_Compat$().fo(args$proxy2));
    var module = p$10.e.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], []));
    var sizes = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], []));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$3), new $c_T2("offset", (offsets[i$3] | 0)), new $c_T2("format", formats[i$3])])))));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("arrayStride", stride), new $c_T2("attributes", attributes)]))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []))], []);
    var result = [];
    $m_sjs_js_ArrayOps$().ax(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$10)));
    var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().aw(p$10.e, result));
    var \u03b42$ = x1;
    var bgls$2 = \u03b42$.M;
    var entries = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl = p$10.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    var allBgls = ((panelBgl !== null) ? $m_sjs_js_ArrayOpsCommon$().b(bgls$2, [panelBgl]) : bgls$2);
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().aw(p$10.e, allBgls);
    var renderShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], panelBgl, pl, false, dict, dict$2);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy1 = ul$proxy1.gw;
    var buffer = new ArrayBuffer(64);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var mvp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p$10.e, uv$proxy1);
    var samp = p$10.kp("linear", "linear", "linear", "repeat", (void 0), (void 0));
    var clampSamp = p$10.kp("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    var Bindable_this = p$10.fn(groundForm, renderShade, "none", (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", groundTile);
    var \u03b4scrutinee155 = e1$proxy1.H;
    var idx = (Bindable_this.P.a9.tex | 0);
    while (((Bindable_this.D.length | 0) <= idx)) {
      Bindable_this.D.push(null);
    }
    Bindable_this.D[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee155);
    var Bindable_this$3 = p$10.fn(ceilForm, renderShade, "none", (void 0));
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", ceilTile);
    var \u03b4scrutinee165 = e1$proxy2.H;
    var idx$2 = (Bindable_this$3.P.a9.tex | 0);
    while (((Bindable_this$3.D.length | 0) <= idx$2)) {
      Bindable_this$3.D.push(null);
    }
    Bindable_this$3.D[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee165);
    var Bindable_this$5 = p$10.fn(rowForm, renderShade, "none", (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", rowTile);
    var \u03b4scrutinee175 = e1$proxy3.H;
    var idx$3 = (Bindable_this$5.P.a9.tex | 0);
    while (((Bindable_this$5.D.length | 0) <= idx$3)) {
      Bindable_this$5.D.push(null);
    }
    Bindable_this$5.D[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee175);
    var Bindable_this$7 = p$10.fn(colForm, renderShade, "none", (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", colTile);
    var \u03b4scrutinee185 = e1$proxy4.H;
    var idx$4 = (Bindable_this$7.P.a9.tex | 0);
    while (((Bindable_this$7.D.length | 0) <= idx$4)) {
      Bindable_this$7.D.push(null);
    }
    Bindable_this$7.D[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee185);
    var Bindable_this$9 = p$10.fn(boxForm, renderShade, "none", (void 0));
    var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", boxTile);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee195 = e1$proxy5.H;
    var idx$5 = (Bindable_this$9.P.a9.tex | 0);
    while (((Bindable_this$9.D.length | 0) <= idx$5)) {
      Bindable_this$9.D.push(null);
    }
    Bindable_this$9.D[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee195);
    var \u03b4scrutinee201 = e2$proxy1.H;
    var idx$6 = (Bindable_this$9.P.ar.samp | 0);
    while (((Bindable_this$9.ew.length | 0) <= idx$6)) {
      Bindable_this$9.ew.push(null);
    }
    Bindable_this$9.ew[idx$6] = \u03b4scrutinee201;
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy2 = ul$proxy2.gw;
    var buffer$2 = new ArrayBuffer(64);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var invVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p$10.e, uv$proxy2);
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$());
    var uv$proxy3 = ul$proxy3.gw;
    var buffer$3 = new ArrayBuffer(16);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var camPos = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p$10.e, uv$proxy3);
    var fogColor = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.08, 0.1, 0.13);
    var clearColor$2 = new $c_T4(fogColor.n, fogColor.m, fogColor.o, 1.0);
    var shapes$2 = [Bindable_this, Bindable_this$3, Bindable_this$5, Bindable_this$7, Bindable_this$9];
    var Panel_this = p$10.h2((void 0), (void 0), clearColor$2, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes$2, (void 0), (void 0));
    var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("mvp", mvp);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var \u03b4scrutinee208 = e1$proxy6.H;
    var dict$proxy1 = Panel_this.fL;
    dict$proxy1.mvp = \u03b4scrutinee208;
    var \u03b4scrutinee209 = e2$proxy2.H;
    var dict$proxy2 = Panel_this.fL;
    dict$proxy2.samp = \u03b4scrutinee209;
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
        var $x_11 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().jY();
        var AssignTarget_this$3 = ctx$2$3.fg.aH("color");
        var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fh($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "src"), ctx$2$3.ff.Q("uv"), ctx$2$3.ex.Q("samp"));
        return $x_11.h((((("  " + AssignTarget_this$3.ai) + " = ") + value$proxy7.d) + ";"));
      }));
      var d$1 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = reg$1;
      try {
        var $x_12 = body$proxy9.h(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = prev$1;
      }
      program$3$1.ey = $x_12;
      $m_sjs_js_ArrayOps$().ax(reg$1.av, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3$2);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy3.h(program$2);
    var b$2 = program$2.ey;
    var helperFns$proxy3 = program$2.fm();
    var id$2 = p$10.O;
    p$10.O = ((1 + p$10.O) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().b(["samp"], []);
    var dict$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$4.length | 0))) {
      dict$3[names$4[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var names$5 = $m_sjs_js_ArrayOpsCommon$().b(["src"], []);
    var dict$4 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$5.length | 0))) {
      dict$4[names$5[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$2, helperFns$proxy3);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["samp"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).aG.Z()], []));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.au, sd$2.at, fragBuiltinParams$2);
    var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var src: texture_2d<f32>;");
    var args$proxy3 = $m_sr_ScalaRunTime$().fq(new ($d_sjs_js_Any.r().C)([wgsl$2]));
    console.log(...$m_sjsr_Compat$().fo(args$proxy3));
    var module$2 = p$10.e.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().ax(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$10)));
    var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().aw(p$10.e, result$2));
    var \u03b46$ = x4;
    var bgls$4 = \u03b46$.M;
    var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$2 = p$10.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))));
    var allBgls$2 = ((panelBgl$2 !== null) ? $m_sjs_js_ArrayOpsCommon$().b(bgls$4, [panelBgl$2]) : bgls$4);
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().aw(p$10.e, allBgls$2);
    var copyShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      var body$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        var $x_13 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().jY();
        var AssignTarget_this$4 = ctx$2$4.fg.aH("color");
        var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
        var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().jA;
        var a1$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var a2$proxy2 = ctx$2$4.ex.Q("samp");
        var a3$proxy1 = ctx$2$4.ff.Q("uv");
        var a4$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(4.0);
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().ks(fn$proxy2);
        var value$proxy8 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.kk(fn$proxy2) + "(") + a1$proxy2) + ", ") + a2$proxy2) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
        return $x_13.h((((("  " + AssignTarget_this$4.ai) + " = ") + value$proxy8.d) + ";"));
      }));
      var d$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = reg$3;
      try {
        var $x_14 = body$proxy11.h(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = prev$3;
      }
      program$3$2.ey = $x_14;
      $m_sjs_js_ArrayOps$().ax(reg$3.av, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3$3);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy4.h(program$3$3);
    var b$3 = program$3$3.ey;
    var helperFns$proxy4 = program$3$3.fm();
    var id$3 = p$10.O;
    p$10.O = ((1 + p$10.O) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().b(["samp"], []);
    var dict$5 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$6 = 0;
    while ((i$6 < (names$7.length | 0))) {
      dict$5[names$7[i$6]] = i$6;
      i$6 = ((1 + i$6) | 0);
    }
    var names$8 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
    var dict$6 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$8.length | 0))) {
      dict$6[names$8[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy4);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["samp"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).aG.Z()], []));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.au, sd$3.at, fragBuiltinParams$3);
    var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy4 = $m_sr_ScalaRunTime$().fq(new ($d_sjs_js_Any.r().C)([wgsl$3]));
    console.log(...$m_sjsr_Compat$().fo(args$proxy4));
    var module$3 = p$10.e.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().ax(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$3) => (result$3.push(Painter_this$3.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0)))(p$10)));
    var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().aw(p$10.e, result$3));
    var \u03b46$$2 = x7;
    var bgls$6 = \u03b46$$2.M;
    var entries$3 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$3 = p$10.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
    var allBgls$3 = ((panelBgl$3 !== null) ? $m_sjs_js_ArrayOpsCommon$().b(bgls$6, [panelBgl$3]) : bgls$6);
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().aw(p$10.e, allBgls$3);
    var downBlurShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
    var fadeLayers = [];
    var Bindable_this$12 = p$10.ia(copyShade, (void 0), (void 0), (void 0));
    var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("src", Panel_this);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee334 = e1$proxy7.H;
    var idx$7 = (Bindable_this$12.A.a9.src | 0);
    while (((Bindable_this$12.R.length | 0) <= idx$7)) {
      Bindable_this$12.R.push(null);
    }
    Bindable_this$12.R[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee334);
    var \u03b4scrutinee338 = e2$proxy3.H;
    var idx$8 = (Bindable_this$12.A.ar.samp | 0);
    while (((Bindable_this$12.C.length | 0) <= idx$8)) {
      Bindable_this$12.C.push(null);
    }
    Bindable_this$12.C[idx$8] = \u03b4scrutinee338;
    fadeLayers.push(Bindable_this$12);
    var fm = 0;
    while ((fm < 5)) {
      var mipSource$1 = fm;
      var mipTarget$1 = ((1 + fm) | 0);
      var Bindable_this$15 = p$10.ia(downBlurShade, (void 0), mipSource$1, mipTarget$1);
      var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
      var \u03b4scrutinee346 = e1$proxy8.H;
      var idx$9 = (Bindable_this$15.A.ar.samp | 0);
      while (((Bindable_this$15.C.length | 0) <= idx$9)) {
        Bindable_this$15.C.push(null);
      }
      Bindable_this$15.C[idx$9] = \u03b4scrutinee346;
      fadeLayers.push(Bindable_this$15);
      fm = ((1 + fm) | 0);
    }
    var fadeBlurPanel = p$10.h2((void 0), (void 0), (void 0), (void 0), (void 0), 6, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), fadeLayers);
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      var body$proxy13 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$5) => {
        var uv$3 = ctx$2$5.ff.Q("uv");
        var d$4 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("d");
        var ndc = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("ndc");
        var worldH = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldH");
        var worldPos = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldPos");
        var dist = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("dist");
        var f = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("f");
        var lod = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lod");
        var col = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("col");
        var $x_27 = $m_sjsr_package$();
        var $x_26 = d$4.ab($m_Ltrivalibs_graphics_math_gpu_expr$package$().l4($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().gU($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().mY(ctx$2$5.jx))));
        var $x_25 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
        var $x_24 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().g2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gY().h8(uv$3), 2.0), 1.0);
        var e$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().g2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gY().kx(uv$3), 2.0);
        var $x_23 = ndc.ab($x_25.fh($x_24, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().i7().ii((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().i5(1.0)) + " - ") + e$proxy3.d) + ")")), d$4));
        var $x_22 = worldH.ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ku(ctx$2$5.ex.Q("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jZ(), $m_Ltrivalibs_graphics_math_gpu_vec4$().g3(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jX().h(1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().g6(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
        var $x_21 = worldPos.ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().l7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kw(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fl(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().g6().kv(worldH)));
        var $x_20 = dist.ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fl().k1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mO(worldPos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fl(), ctx$2$5.ex.Q("camPos"))));
        var $x_19 = f.ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mL(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(18.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(160.0)));
        var $x_18 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var $x_17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().g2(f, 4.0);
        var $x_16 = lod.ab($x_18.mh($x_17.lH($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().i7().ii((("(f32(1) + " + e$proxy4.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jX().h(5)));
        var $x_15 = col.ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kw($m_Ltrivalibs_graphics_math_gpu_expr$package$().mD($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), uv$3, ctx$2$5.ex.Q("samp"), lod)));
        var AssignTarget_this$5 = ctx$2$5.fg.aH("color");
        var value$proxy9 = $m_Ltrivalibs_graphics_math_gpu_vec4$().g3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mi(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fl(), $m_Ltrivalibs_graphics_math_gpu_vec3$().fh($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(fogColor.n), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(fogColor.m), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(fogColor.o)), f), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_27.f(new ($d_T.r().C)([$x_26, $x_23, $x_22, $x_21, $x_20, $x_19, $x_16, $x_15, (((("  " + AssignTarget_this$5.ai) + " = ") + value$proxy9.d) + ";")]))), "", "\n", "");
      }));
      var d$5 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$5), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = reg$4;
      try {
        var $x_28 = body$proxy13.h(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().x = prev$4;
      }
      program$3$4.ey = $x_28;
      $m_sjs_js_ArrayOps$().ax(reg$4.av, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$4);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy5.h(program$4);
    var b$4 = program$4.ey;
    var helperFns$proxy5 = program$4.fm();
    var id$4 = p$10.O;
    p$10.O = ((1 + p$10.O) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().b(["invVp"], $m_sjs_js_ArrayOpsCommon$().b(["camPos"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])));
    var dict$7 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$10.length | 0))) {
      dict$7[names$10[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var names$11 = $m_sjs_js_ArrayOpsCommon$().b(["col"], $m_sjs_js_ArrayOpsCommon$().b(["depth"], []));
    var dict$8 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$9 = 0;
    while ((i$9 < (names$11.length | 0))) {
      dict$8[names$11[i$9]] = i$9;
      i$9 = ((1 + i$9) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy5);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["invVp"], $m_sjs_js_ArrayOpsCommon$().b(["camPos"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).aG.Z()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).aG.Z()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).aG.Z()], []))));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.au, sd$4.at, fragBuiltinParams$4);
    var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
    var args$proxy5 = $m_sr_ScalaRunTime$().fq(new ($d_sjs_js_Any.r().C)([wgsl$4]));
    console.log(...$m_sjsr_Compat$().fo(args$proxy5));
    var module$4 = p$10.e.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().ax(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$4) => (result$4.push(Painter_this$4.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))))) | 0)))(p$10)));
    var x10 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().aw(p$10.e, result$4));
    var \u03b46$$3 = x10;
    var bgls$8 = \u03b46$$3.M;
    var entries$4 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("sampleType", "depth")])))))]))))], []));
    var panelBgl$4 = p$10.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$4)])))));
    var allBgls$4 = ((panelBgl$4 !== null) ? $m_sjs_js_ArrayOpsCommon$().b(bgls$8, [panelBgl$4]) : bgls$8);
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().aw(p$10.e, allBgls$4);
    var resolveShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
    var Bindable_this$17 = p$10.ia(resolveShade, (void 0), (void 0), (void 0));
    var e1$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("col", fadeBlurPanel);
    var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", Panel_this.kW(0, (-1), true));
    var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", invVp);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("camPos", camPos);
    var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee438 = e1$proxy9.H;
    var idx$10 = (Bindable_this$17.A.a9.col | 0);
    while (((Bindable_this$17.R.length | 0) <= idx$10)) {
      Bindable_this$17.R.push(null);
    }
    Bindable_this$17.R[idx$10] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee438);
    var \u03b4scrutinee452 = e2$proxy4.H;
    var idx$11 = (Bindable_this$17.A.a9.depth | 0);
    while (((Bindable_this$17.R.length | 0) <= idx$11)) {
      Bindable_this$17.R.push(null);
    }
    Bindable_this$17.R[idx$11] = \u03b4scrutinee452;
    var \u03b4scrutinee456 = e3$proxy1.H;
    var idx$12 = (Bindable_this$17.A.ar.invVp | 0);
    while (((Bindable_this$17.C.length | 0) <= idx$12)) {
      Bindable_this$17.C.push(null);
    }
    Bindable_this$17.C[idx$12] = \u03b4scrutinee456;
    var \u03b4scrutinee466 = e4$proxy1.H;
    var idx$13 = (Bindable_this$17.A.ar.camPos | 0);
    while (((Bindable_this$17.C.length | 0) <= idx$13)) {
      Bindable_this$17.C.push(null);
    }
    Bindable_this$17.C[idx$13] = \u03b4scrutinee466;
    var \u03b4scrutinee480 = e5$proxy1.H;
    var idx$14 = (Bindable_this$17.A.ar.samp | 0);
    while (((Bindable_this$17.C.length | 0) <= idx$14)) {
      Bindable_this$17.C.push(null);
    }
    Bindable_this$17.C[idx$14] = \u03b4scrutinee480;
    var fadePanel = p$10.h2((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), Bindable_this$17, (void 0));
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kP(0.6, ((canvas.width | 0) / (canvas.height | 0)), 0.1, 340.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 3.0, 15.0));
    $m_Ltrivalibs_dev_devPreserve$().kT(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().lz(p$10.f4, true, 400.0, 5.0, true, (void 0));
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(1.0, 3.0);
    p$10.mn(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var cw = (+v1$2);
      var ch = (+v2$2);
      var aspect$2 = (cw / ch);
      var fov$1 = cam.fd;
      var near$1 = cam.fe;
      var far$1 = cam.fc;
      var rotH$2 = cam.X;
      var rotV$2 = cam.as;
      var pos$2 = cam.J;
      cam.ic(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2);
    })));
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$10, rowTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$10, colTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$10, groundTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$10, ceilTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$10, boxTile);
    $m_Ltrivalibs_utils_animation_animate$package$().kO(((p$5) => ((arg1$2) => {
      controller.mW(cam, input, (+arg1$2));
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().i8(), cam.hK, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.mZ());
      mvp.gv.h7(mvp.ep, vp);
      var $x_30 = mvp.gu.queue;
      var $x_29 = mvp.fx;
      var s$proxy4 = mvp.ep;
      $x_30.writeBuffer($x_29, 0.0, s$proxy4.dv.buffer);
      var value$proxy11 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().i8(), vp, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
      invVp.gv.h7(invVp.ep, value$proxy11);
      var $x_32 = invVp.gu.queue;
      var $x_31 = invVp.fx;
      var s$proxy5 = invVp.ep;
      $x_32.writeBuffer($x_31, 0.0, s$proxy5.dv.buffer);
      var value$proxy12 = cam.J;
      camPos.gv.h7(camPos.ep, value$proxy12);
      var $x_34 = camPos.gu.queue;
      var $x_33 = camPos.fx;
      var s$proxy6 = camPos.ep;
      $x_34.writeBuffer($x_33, 0.0, s$proxy6.dv.buffer);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, Panel_this);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, fadeBlurPanel);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, fadePanel);
      p$5.mJ(fadePanel);
    }))(p$10));
  })));
});
var $d_Lsketches_rooms_gridceiling_GridCeiling$package$ = new $TypeData().i($c_Lsketches_rooms_gridceiling_GridCeiling$package$, "sketches.rooms.gridceiling.GridCeiling$package$", ({
  dg: 1
}));
var $n_Lsketches_rooms_gridceiling_GridCeiling$package$;
function $m_Lsketches_rooms_gridceiling_GridCeiling$package$() {
  if ((!$n_Lsketches_rooms_gridceiling_GridCeiling$package$)) {
    $n_Lsketches_rooms_gridceiling_GridCeiling$package$ = new $c_Lsketches_rooms_gridceiling_GridCeiling$package$();
  }
  return $n_Lsketches_rooms_gridceiling_GridCeiling$package$;
}
function $s_Lsketches_rooms_gridceiling_roomsGridCeiling__main__AT__V(args) {
  try {
    $m_Lsketches_rooms_gridceiling_GridCeiling$package$().mC();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().mK(e);
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_Ltrivalibs_dev_DevHandle(resetFn) {
}
$p = $c_Ltrivalibs_dev_DevHandle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_DevHandle;
/** @constructor */
function $h_Ltrivalibs_dev_DevHandle() {
}
$h_Ltrivalibs_dev_DevHandle.prototype = $p;
var $d_Ltrivalibs_dev_DevHandle = new $TypeData().i($c_Ltrivalibs_dev_DevHandle, "trivalibs.dev.DevHandle", ({
  dh: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.eY = null;
  this.he = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.eY = [];
  this.he = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.l5 = (function() {
  return (import.meta.hot !== (void 0));
});
$p.mg = (function() {
  var u = import.meta.url;
  var end = (u.indexOf("?") | 0);
  if ((end < 0)) {
    end = (u.indexOf("#") | 0);
  }
  if ((end >= 0)) {
    var endIndex = end;
    return u.substring(0, endIndex);
  } else {
    return u;
  }
});
$p.mN = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().mg()) + ":") + label);
});
$p.id = (function() {
  return window.sessionStorage;
});
$p.mw = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().id().getItem(key);
  if ((raw === null)) {
    return null;
  } else {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
});
$p.n4 = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().id().setItem(key, JSON.stringify(json));
});
$p.mA = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().id().removeItem(key);
});
$p.ld = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().he)) {
    $m_Ltrivalibs_dev_dev$package$().he = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().eY.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().eY[i].fi();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.mx = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().ld();
  $m_Ltrivalibs_dev_dev$package$().eY.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().lv($m_Ltrivalibs_dev_dev$package$().eY, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().eY.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  di: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.J.n, cam.J.m, cam.J.o, cam.X, cam.as];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.fd;
      var aspect$1 = cam.fN;
      var near$1 = cam.fe;
      var far$1 = cam.fc;
      cam.ic(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
    }
  }
}
/** @constructor */
function $c_Ltrivalibs_dev_devPreserve$() {
}
$p = $c_Ltrivalibs_dev_devPreserve$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_devPreserve$;
/** @constructor */
function $h_Ltrivalibs_dev_devPreserve$() {
}
$h_Ltrivalibs_dev_devPreserve$.prototype = $p;
$p.kT = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().l5())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().mN(label);
    var initPos = cam.J;
    var initRotH = cam.X;
    var initRotV = cam.as;
    var stored = $m_Ltrivalibs_dev_dev$package$().mw(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.fi();
      $m_Ltrivalibs_dev_dev$package$().mA(sk);
      var fov$proxy1 = cam.fd;
      var aspect$proxy1 = cam.fN;
      var near$proxy1 = cam.fe;
      var far$proxy1 = cam.fc;
      cam.ic(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().mx(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().n4(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dj: 1
}));
var $n_Ltrivalibs_dev_devPreserve$;
function $m_Ltrivalibs_dev_devPreserve$() {
  if ((!$n_Ltrivalibs_dev_devPreserve$)) {
    $n_Ltrivalibs_dev_devPreserve$ = new $c_Ltrivalibs_dev_devPreserve$();
  }
  return $n_Ltrivalibs_dev_devPreserve$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_BufferBinding(buffer, device, uv) {
  this.ep = null;
  this.gu = null;
  this.gv = null;
  this.fx = null;
  this.ep = buffer;
  this.gu = device;
  this.gv = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.fx = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aH)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.f1 = null;
  this.f2 = null;
  this.es = null;
  this.et = null;
  this.eZ = null;
  this.f0 = null;
  this.eq = null;
  this.er = null;
  this.f1 = frontTopLeft;
  this.f2 = frontTopRight;
  this.es = frontBottomLeft;
  this.et = frontBottomRight;
  this.eZ = backTopLeft;
  this.f0 = backTopRight;
  this.eq = backBottomLeft;
  this.er = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  dp: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Box$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box$() {
}
$h_Ltrivalibs_graphics_geometry_Box$.prototype = $p;
$p.i1 = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.n;
  var cy = center.m;
  var cz = center.o;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  dq: 1
}));
var $n_Ltrivalibs_graphics_geometry_Box$;
function $m_Ltrivalibs_graphics_geometry_Box$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Box$)) {
    $n_Ltrivalibs_graphics_geometry_Box$ = new $c_Ltrivalibs_graphics_geometry_Box$();
  }
  return $n_Ltrivalibs_graphics_geometry_Box$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_BufferedGeometry(vertices, indices) {
  this.iL = null;
  this.hf = null;
  this.iL = vertices;
  this.hf = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dr: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  ds: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.hg = null;
  this.aq = null;
  this.iM = null;
  this.gy = null;
  this.gx = null;
  this.hg = evidence$1;
  this.aq = [];
  this.iM = [];
  this.gy = [];
  this.gx = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.kM = (function(face, normal, section) {
  var faceIdx = (this.aq.length | 0);
  this.aq.push(face);
  this.iM.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().mu(this.hg.km(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().ls(Object, this.gx, key)) {
      var $x_2 = this.gy;
      var dict = this.gx;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().iJ.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.iQ.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.gy.length | 0);
      var dict$1 = this.gx;
      dict$1[key] = idx;
      this.gy.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.hg.km(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dv: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh$() {
}
$h_Ltrivalibs_graphics_geometry_Mesh$.prototype = $p;
$p.kR = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().kN(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dw: 1
}));
var $n_Ltrivalibs_graphics_geometry_Mesh$;
function $m_Ltrivalibs_graphics_geometry_Mesh$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Mesh$)) {
    $n_Ltrivalibs_graphics_geometry_Mesh$ = new $c_Ltrivalibs_graphics_geometry_Mesh$();
  }
  return $n_Ltrivalibs_graphics_geometry_Mesh$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIndex, vertexSlot) {
  this.kC = 0;
  this.kD = 0;
  this.kC = faceIndex;
  this.kD = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dy: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.iQ = null;
  this.iQ = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  dD: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_buffers$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_buffers$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_buffers$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_buffers$package$() {
}
$h_Ltrivalibs_graphics_geometry_buffers$package$.prototype = $p;
$p.mf = (function(idxBuf, vertexCount) {
  if (((idxBuf.length | 0) === 0)) {
    return null;
  } else if ((vertexCount <= 65535)) {
    var ua = new Uint16Array((idxBuf.length | 0));
    var i = 0;
    while ((i < (idxBuf.length | 0))) {
      ua[i] = idxBuf[i];
      i = ((1 + i) | 0);
    }
    return ua;
  } else {
    var ua$2 = new Uint32Array((idxBuf.length | 0));
    var i$2 = 0;
    while ((i$2 < (idxBuf.length | 0))) {
      ua$2[i$2] = (idxBuf[i$2] | 0);
      i$2 = ((1 + i$2) | 0);
    }
    return ua$2;
  }
});
var $d_Ltrivalibs_graphics_geometry_buffers$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_buffers$package$, "trivalibs.graphics.geometry.buffers$package$", ({
  dE: 1
}));
var $n_Ltrivalibs_graphics_geometry_buffers$package$;
function $m_Ltrivalibs_graphics_geometry_buffers$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_buffers$package$)) {
    $n_Ltrivalibs_graphics_geometry_buffers$package$ = new $c_Ltrivalibs_graphics_geometry_buffers$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_buffers$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_mesh$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_mesh$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_mesh$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_mesh$package$() {
}
$h_Ltrivalibs_graphics_geometry_mesh$package$.prototype = $p;
$p.kN = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.kM(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  dF: 1
}));
var $n_Ltrivalibs_graphics_geometry_mesh$package$;
function $m_Ltrivalibs_graphics_geometry_mesh$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_mesh$package$)) {
    $n_Ltrivalibs_graphics_geometry_mesh$package$ = new $c_Ltrivalibs_graphics_geometry_mesh$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_mesh$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_package$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$() {
}
$h_Ltrivalibs_graphics_geometry_package$package$.prototype = $p;
$p.mu = (function(v) {
  return (((($doubleToInt((10000.0 * v.n)) + ",") + $doubleToInt((10000.0 * v.m))) + ",") + $doubleToInt((10000.0 * v.o)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  dG: 1
}));
var $n_Ltrivalibs_graphics_geometry_package$package$;
function $m_Ltrivalibs_graphics_geometry_package$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_package$package$)) {
    $n_Ltrivalibs_graphics_geometry_package$package$ = new $c_Ltrivalibs_graphics_geometry_package$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_package$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
}
$p = $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
}
$h_Ltrivalibs_graphics_geometry_polygon$package$Quad$.prototype = $p;
$p.a3 = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  dI: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Quad$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.g7(m));
  var a01 = (+x$2.g8(m));
  var a02 = (+x$2.g9(m));
  var a03 = (+x$2.ga(m));
  var a10 = (+x$2.gb(m));
  var a11 = (+x$2.gc(m));
  var a12 = (+x$2.gd(m));
  var a13 = (+x$2.ge(m));
  var a20 = (+x$2.gf(m));
  var a21 = (+x$2.gg(m));
  var a22 = (+x$2.gh(m));
  var a23 = (+x$2.gi(m));
  var a30 = (+x$2.gj(m));
  var a31 = (+x$2.gk(m));
  var a32 = (+x$2.gl(m));
  var a33 = (+x$2.gm(m));
  var b00 = (+x$2.g7(other));
  var b01 = (+x$2.g8(other));
  var b02 = (+x$2.g9(other));
  var b03 = (+x$2.ga(other));
  var b10 = (+x$2.gb(other));
  var b11 = (+x$2.gc(other));
  var b12 = (+x$2.gd(other));
  var b13 = (+x$2.ge(other));
  var b20 = (+x$2.gf(other));
  var b21 = (+x$2.gg(other));
  var b22 = (+x$2.gh(other));
  var b23 = (+x$2.gi(other));
  var b30 = (+x$2.gj(other));
  var b31 = (+x$2.gk(other));
  var b32 = (+x$2.gl(other));
  var b33 = (+x$2.gm(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.g7(m));
  var a01 = (+x$2.g8(m));
  var a02 = (+x$2.g9(m));
  var a03 = (+x$2.ga(m));
  var a10 = (+x$2.gb(m));
  var a11 = (+x$2.gc(m));
  var a12 = (+x$2.gd(m));
  var a13 = (+x$2.ge(m));
  var a20 = (+x$2.gf(m));
  var a21 = (+x$2.gg(m));
  var a22 = (+x$2.gh(m));
  var a23 = (+x$2.gi(m));
  var a30 = (+x$2.gj(m));
  var a31 = (+x$2.gk(m));
  var a32 = (+x$2.gl(m));
  var a33 = (+x$2.gm(m));
  var b00 = ((a00 * a11) - (a01 * a10));
  var b01 = ((a00 * a12) - (a02 * a10));
  var b02 = ((a00 * a13) - (a03 * a10));
  var b03 = ((a01 * a12) - (a02 * a11));
  var b04 = ((a01 * a13) - (a03 * a11));
  var b05 = ((a02 * a13) - (a03 * a12));
  var b06 = ((a20 * a31) - (a21 * a30));
  var b07 = ((a20 * a32) - (a22 * a30));
  var b08 = ((a20 * a33) - (a23 * a30));
  var b09 = ((a21 * a32) - (a22 * a31));
  var b10 = ((a21 * a33) - (a23 * a31));
  var b11 = ((a22 * a33) - (a23 * a32));
  var det = ((((((b00 * b11) - (b01 * b10)) + (b02 * b09)) + (b03 * b08)) - (b04 * b07)) + (b05 * b06));
  var invDet = (1.0 / det);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a11 * b11) - (a12 * b10)) + (a13 * b09)) * invDet), (((((-a01) * b11) + (a02 * b10)) - (a03 * b09)) * invDet), ((((a31 * b05) - (a32 * b04)) + (a33 * b03)) * invDet), (((((-a21) * b05) + (a22 * b04)) - (a23 * b03)) * invDet), (((((-a10) * b11) + (a12 * b08)) - (a13 * b07)) * invDet), ((((a00 * b11) - (a02 * b08)) + (a03 * b07)) * invDet), (((((-a30) * b05) + (a32 * b02)) - (a33 * b01)) * invDet), ((((a20 * b05) - (a22 * b02)) + (a23 * b01)) * invDet), ((((a10 * b10) - (a11 * b08)) + (a13 * b06)) * invDet), (((((-a00) * b10) + (a01 * b08)) - (a03 * b06)) * invDet), ((((a30 * b04) - (a31 * b02)) + (a33 * b00)) * invDet), (((((-a20) * b04) + (a21 * b02)) - (a23 * b00)) * invDet), (((((-a10) * b09) + (a11 * b07)) - (a12 * b06)) * invDet), ((((a00 * b09) - (a01 * b07)) + (a02 * b06)) * invDet), (((((-a30) * b03) + (a31 * b01)) - (a32 * b00)) * invDet), ((((a20 * b03) - (a21 * b01)) + (a22 * b00)) * invDet));
}
function $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($thiz, m, mb, other, x$4) {
  mb.k2(m, (+x$4.g7(other)));
  mb.k3(m, (+x$4.g8(other)));
  mb.k4(m, (+x$4.g9(other)));
  mb.k5(m, (+x$4.ga(other)));
  mb.k6(m, (+x$4.gb(other)));
  mb.k7(m, (+x$4.gc(other)));
  mb.k8(m, (+x$4.gd(other)));
  mb.k9(m, (+x$4.ge(other)));
  mb.ka(m, (+x$4.gf(other)));
  mb.kb(m, (+x$4.gg(other)));
  mb.kc(m, (+x$4.gh(other)));
  mb.kd(m, (+x$4.gi(other)));
  mb.ke(m, (+x$4.gj(other)));
  mb.kf(m, (+x$4.gk(other)));
  mb.kg(m, (+x$4.gl(other)));
  mb.kh(m, (+x$4.gm(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.n + other.n), (v.m + other.m), (v.o + other.o));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.n), (-v.m), (-v.o));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.n - other.n), (v.m - other.m), (v.o - other.o));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.n * scalar), (v.m * scalar), (v.o * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.n / scalar), (v.m / scalar), (v.o / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.m * other.o) - (v.o * other.m)), ((v.o * other.n) - (v.n * other.o)), ((v.n * other.m) - (v.m * other.n)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.hh = 0.0;
  this.hi = 0.0;
  this.hj = 0.0;
  this.hk = 0.0;
  this.hl = 0.0;
  this.hm = 0.0;
  this.hn = 0.0;
  this.ho = 0.0;
  this.hp = 0.0;
  this.hq = 0.0;
  this.hr = 0.0;
  this.hs = 0.0;
  this.ht = 0.0;
  this.hu = 0.0;
  this.hv = 0.0;
  this.hw = 0.0;
  this.hh = m00;
  this.hi = m01;
  this.hj = m02;
  this.hk = m03;
  this.hl = m10;
  this.hm = m11;
  this.hn = m12;
  this.ho = m13;
  this.hp = m20;
  this.hq = m21;
  this.hr = m22;
  this.hs = m23;
  this.ht = m30;
  this.hu = m31;
  this.hv = m32;
  this.hw = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  dU: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.a8 = 0.0;
  this.ag = 0.0;
  this.ah = 0.0;
  this.a7 = 0.0;
  this.a8 = x;
  this.ag = y;
  this.ah = z;
  this.a7 = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  dX: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$.prototype = $p;
$p.lm = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.ln = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  dY: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(((((q.a7 * p.a8) + (q.a8 * p.a7)) + (q.ag * p.ah)) - (q.ah * p.ag)), ((((q.a7 * p.ag) - (q.a8 * p.ah)) + (q.ag * p.a7)) + (q.ah * p.a8)), ((((q.a7 * p.ah) + (q.a8 * p.ag)) - (q.ag * p.a8)) + (q.ah * p.a7)), ((((q.a7 * p.a7) - (q.a8 * p.a8)) - (q.ag * p.ag)) - (q.ah * p.ah)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.hx = 0.0;
  this.hy = 0.0;
  this.hx = x;
  this.hy = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  e2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.n = 0.0;
  this.m = 0.0;
  this.o = 0.0;
  this.n = x;
  this.m = y;
  this.o = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  e3: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.iW = null;
  this.iX = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.lr = (function() {
  if ((!this.iX)) {
    this.iW = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.iX = true;
  }
  return this.iW;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  e6: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.d = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.d = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.i = (function() {
  return this.d;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aP: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$.prototype = $p;
$p.i7 = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$1$2))));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  ea: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
function $m_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_LeftScalar$)) {
    $n_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
  this.j0 = null;
  this.j1 = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.fh = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.d) + ", ") + sampler.d) + ", ") + uv.d) + ")"));
});
$p.mD = (function(tex, uv, sampler, level) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("textureSampleLevel(" + tex.d) + ", ") + sampler.d) + ", ") + uv.d) + ", ") + level.d) + ")"));
});
$p.l4 = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.d) + ", ") + coord.d) + ", 0)"));
});
$p.jY = (function() {
  if ((!this.j1)) {
    this.j0 = new $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2();
    this.j1 = true;
  }
  return this.j0;
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  ed: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_expr$package$;
function $m_Ltrivalibs_graphics_math_gpu_expr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_expr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_expr$package$ = new $c_Ltrivalibs_graphics_math_gpu_expr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_expr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  this.j2 = null;
  this.j3 = false;
  this.j4 = null;
  this.j5 = false;
  this.j8 = null;
  this.j9 = false;
  this.ja = null;
  this.jb = false;
  this.jc = null;
  this.jd = false;
  this.j6 = null;
  this.j7 = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.i5 = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.z = (function() {
  if ((!this.j3)) {
    this.j2 = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.j3 = true;
  }
  return this.j2;
});
$p.jX = (function() {
  if ((!this.j5)) {
    this.j4 = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3();
    this.j5 = true;
  }
  return this.j4;
});
$p.gY = (function() {
  if ((!this.j9)) {
    this.j8 = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4();
    this.j9 = true;
  }
  return this.j8;
});
$p.fl = (function() {
  if ((!this.jb)) {
    this.ja = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.jb = true;
  }
  return this.ja;
});
$p.g6 = (function() {
  if ((!this.jd)) {
    this.jc = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.jd = true;
  }
  return this.jc;
});
$p.jZ = (function() {
  if ((!this.j7)) {
    this.j6 = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9();
    this.j7 = true;
  }
  return this.j6;
});
$p.mY = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".xy"));
});
$p.kw = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  ef: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_ivec2$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_ivec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_ivec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_ivec2$() {
}
$h_Ltrivalibs_graphics_math_gpu_ivec2$.prototype = $p;
$p.gU = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  er: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_ivec2$;
function $m_Ltrivalibs_graphics_math_gpu_ivec2$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_ivec2$)) {
    $n_Ltrivalibs_graphics_math_gpu_ivec2$ = new $c_Ltrivalibs_graphics_math_gpu_ivec2$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_ivec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec3$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec3$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec3$.prototype = $p;
$p.fh = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.d) + ", ") + y.d) + ", ") + z.d) + ")"));
});
$p.gU = (function(scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  es: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec3$;
function $m_Ltrivalibs_graphics_math_gpu_vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec3$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec3$ = new $c_Ltrivalibs_graphics_math_gpu_vec3$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec4$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec4$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec4$.prototype = $p;
$p.kS = (function(x, y, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.d) + ", ") + y.d) + ", ") + z.d) + ", ") + w.d) + ")"));
});
$p.g3 = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.d) + ", ") + w.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  et: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec4$;
function $m_Ltrivalibs_graphics_math_gpu_vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec4$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec4$ = new $c_Ltrivalibs_graphics_math_gpu_vec4$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BindPair(name, value) {
  this.H = null;
  this.H = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  eu: 1
}));
function $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V($thiz, raw) {
  if ((!(!(raw instanceof Uint16Array)))) {
    var \u03b41$___1 = raw.buffer;
    var \u03b41$___2 = (raw.length | 0);
    var \u03b41$___3 = "uint16";
  } else {
    var \u03b41$___1 = raw.buffer;
    var \u03b41$___2 = (raw.length | 0);
    var \u03b41$___3 = "uint32";
  }
  var ab = \u03b41$___1;
  var count = (\u03b41$___2 | 0);
  var fmt = \u03b41$___3;
  var $x_1 = $thiz.fy.e;
  var value = (ab.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 24
  }));
  $thiz.fy.a2.writeBuffer(buf, 0.0, ab);
  if (($thiz.f3 !== null)) {
    var opt$proxy2 = $thiz.f3;
    opt$proxy2.destroy();
  }
  $thiz.f3 = buf;
  $thiz.gz = count;
  $thiz.hA = fmt;
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V($thiz, verts) {
  var $x_1 = $thiz.fy.e;
  var value = (verts.dv.buffer.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 40
  }));
  $thiz.fy.a2.writeBuffer(buf, 0.0, verts.dv.buffer);
  if (($thiz.fz !== null)) {
    var opt$proxy4 = $thiz.fz;
    opt$proxy4.destroy();
  }
  $thiz.fz = buf;
  $thiz.gA = (verts.off | 0);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.fy = null;
  this.fz = null;
  this.gA = 0;
  this.f3 = null;
  this.gz = 0;
  this.hA = null;
  this.hB = null;
  this.hz = null;
  this.fy = painter;
  this.fz = null;
  this.gA = 0;
  this.f3 = null;
  this.gz = 0;
  this.hA = "uint16";
  this.hB = "triangle-list";
  this.hz = "ccw";
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.mF = (function(geometry, vertices, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.hB = topology;
  }
  if ((frontFace !== (void 0))) {
    this.hz = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, geometry.iL);
    if ((geometry.hf !== null)) {
      $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V(this, geometry.hf);
    }
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, vertices);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  ev: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.gB = null;
  this.gB = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.u = (function() {
  return (this.gB.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  ew: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.n1();
  var h = $thiz.lu();
  panel.le(w, h);
  var msaa = panel.fb;
  var encoder = $thiz.e.createCommandEncoder();
  var panelFormats = panel.i4();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.mQ())) {
    if ((panel.gK !== null)) {
      matchResult6: {
        var \u03b412$;
        var x18 = panel.gK;
        if ((x18 !== null)) {
          var x19 = $f_s_Product4__productElement__I__O(x18, 0);
          var x20 = $f_s_Product4__productElement__I__O(x18, 1);
          var x21 = $f_s_Product4__productElement__I__O(x18, 2);
          var x22 = $f_s_Product4__productElement__I__O(x18, 3);
          var \u03b412$ = x18;
          break matchResult6;
        }
        throw new $c_s_MatchError(x18);
      }
      var r$2 = (+\u03b412$.dS);
      var g$2 = (+\u03b412$.az);
      var b$2 = (+\u03b412$.aA);
      var a$2 = (+\u03b412$.aB);
      if (msaa) {
        var _2 = panel.kj(t);
        var _2$1 = panel.h4(t);
        var _2$2 = ({
          "r": r$2,
          "g": g$2,
          "b": b$2,
          "a": a$2
        });
        var attachment = ({
          "view": _2,
          "resolveTarget": _2$1,
          "loadOp": "clear",
          "storeOp": "discard",
          "clearValue": _2$2
        });
      } else {
        var _2$3 = panel.h4(t);
        var _2$4 = ({
          "r": r$2,
          "g": g$2,
          "b": b$2,
          "a": a$2
        });
        var attachment = ({
          "view": _2$3,
          "loadOp": "clear",
          "storeOp": "store",
          "clearValue": _2$4
        });
      }
    } else if (msaa) {
      var _2$5 = panel.kj(t);
      var _2$6 = panel.h4(t);
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var _2$7 = panel.h4(t);
      var attachment = ({
        "view": _2$7,
        "loadOp": "load",
        "storeOp": "store"
      });
    }
    colorAttachments.push(attachment);
    t = ((1 + t) | 0);
  }
  var passDesc = ({
    "colorAttachments": colorAttachments
  });
  if (panel.fJ) {
    var _2$8 = panel.jT();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.gL.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.gL[i], panel.fJ, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.a2.submit([encoder.finish()]);
  if (panel.fE) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var srcView = panel.mR();
  var dstView = panel.mt();
  var hasPongLayers = false;
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.aF.length | 0))) {
    var layer = panel.aF[j];
    var hasPanelLayout = (layer.A.fM !== null);
    var slot0Manual = ((hasPanelLayout && ((layer.R.length | 0) > 0)) && (layer.R[0] !== null));
    var needsPingPong = (hasPanelLayout && (!slot0Manual));
    if ((layer.fA >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.a2.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.gq(0, layer.fA);
      var mipSrcView = ((layer.gC >= 0) ? panel.gq(0, layer.gC) : srcView);
      var enc = $thiz.e.createCommandEncoder();
      var _2$9 = [({
        "view": mipDstView,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var mipPass = enc.beginRenderPass(({
        "colorAttachments": _2$9
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, mipPass, layer, false, false, panelFormats, mipSrcView, panel);
      mipPass.end();
      $thiz.a2.submit([enc.finish()]);
    } else if (needsPingPong) {
      hasPongLayers = true;
      if ((curPass !== null)) {
        curPass.end();
        $thiz.a2.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.e.createCommandEncoder();
      var _2$10 = dstView;
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, srcView, panel);
      ppPass.end();
      $thiz.a2.submit([enc$2.finish()]);
      var tmp = srcView;
      srcView = dstView;
      dstView = tmp;
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.e.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = srcView;
        var _2$13 = [({
          "view": _2$12,
          "loadOp": "load",
          "storeOp": "store"
        })];
        curPass = $x_1.beginRenderPass(({
          "colorAttachments": _2$13
        }));
      }
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, curPass, layer, false, false, panelFormats, null, panel);
    }
    j = ((1 + j) | 0);
  }
  if ((curPass !== null)) {
    curPass.end();
    $thiz.a2.submit([curEncoder.finish()]);
  }
  if (hasPongLayers) {
    panel.fF = srcView;
  } else {
    panel.fF = null;
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.aF.length | 0))) {
    if ((panel.aF[mi].fA >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.ib() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.jj)) {
    $thiz.ji = $thiz.e.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.jj = true;
  }
  return $thiz.ji;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.jf)) {
    var $x_2 = $thiz.e;
    var _2 = ({});
    var _2$1 = ({});
    var _2$2 = [({
      "binding": 0,
      "visibility": 2,
      "texture": _2
    }), ({
      "binding": 1,
      "visibility": 2,
      "sampler": _2$1
    })];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2$2
    }));
    $thiz.je = $x_1;
    $thiz.jf = true;
  }
  return $thiz.je;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.jh)) {
    var module = $thiz.e.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.e;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.e;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.f5;
    var _2$2 = [({
      "format": f$proxy4
    })];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var $x_2 = $x_3.createRenderPipeline(({
      "layout": pipelineLayout,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4
    }));
    $thiz.jg = $x_2;
    $thiz.jh = true;
  }
  return $thiz.jg;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.jm)) {
    var $x_2 = $thiz.e;
    var _2 = ({
      "sampleType": "depth",
      "multisampled": true
    });
    var _2$1 = [({
      "binding": 0,
      "visibility": 2,
      "texture": _2
    })];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2$1
    }));
    $thiz.jl = $x_1;
    $thiz.jm = true;
  }
  return $thiz.jl;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.jo)) {
    var module = $thiz.e.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.e;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.e;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var _2$2 = [];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var _2$5 = ({
      "format": "depth24plus",
      "depthWriteEnabled": true,
      "depthCompare": "always"
    });
    var $x_2 = $x_3.createRenderPipeline(({
      "layout": pl,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4,
      "depthStencil": _2$5
    }));
    $thiz.jn = $x_2;
    $thiz.jo = true;
  }
  return $thiz.jn;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.e.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.mB();
  var _2$2 = ({
    "view": _2$1,
    "depthLoadOp": "clear",
    "depthStoreOp": "store",
    "depthClearValue": 1.0
  });
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2,
    "depthStencilAttachment": _2$2
  }));
  var $x_1 = $thiz.e;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.jT();
  var _2$5 = [({
    "binding": 0,
    "resource": _2$4
  })];
  var bindGroup = $x_1.createBindGroup(({
    "layout": _2$3,
    "entries": _2$5
  }));
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz));
  pass.setBindGroup(0, bindGroup);
  pass.draw(3);
  pass.end();
  $thiz.a2.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.jq)) {
    $thiz.jp = $thiz.e.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.jq = true;
  }
  return $thiz.jp;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.gD.hasOwnProperty(format)))))) {
    return $thiz.gD[format];
  } else {
    var module = $thiz.e.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.e;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.e;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var _2$2 = [({
      "format": format
    })];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var p = $x_2.createRenderPipeline(({
      "layout": pl,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4
    }));
    $thiz.gD[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.ib();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.fa.length | 0) > 0) ? panel.fa[0] : $thiz.f5);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.gq(0, ((i - 1) | 0));
    var dstView = panel.gq(0, i);
    var encoder = $thiz.e.createCommandEncoder();
    var _2 = ({
      "r": 0,
      "g": 0,
      "b": 0,
      "a": 0
    });
    var _2$1 = [({
      "view": dstView,
      "loadOp": "clear",
      "storeOp": "store",
      "clearValue": _2
    })];
    var pass = encoder.beginRenderPass(({
      "colorAttachments": _2$1
    }));
    var $x_1 = $thiz.e;
    var _2$2 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz);
    var _2$4 = [({
      "binding": 0,
      "resource": srcView
    }), ({
      "binding": 1,
      "resource": _2$3
    })];
    var bindGroup = $x_1.createBindGroup(({
      "layout": _2$2,
      "entries": _2$4
    }));
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(3);
    pass.end();
    $thiz.a2.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.W.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.W[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.I.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.I[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.fL;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.ar.hasOwnProperty(name)))))) {
      var idx = (shade.ar[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.a9.hasOwnProperty(name)))))) {
      var idx$2 = (shade.a9[name] | 0);
      if (((idx$2 >= (workPanelBindings.length | 0)) || (workPanelBindings[idx$2] === null))) {
        while (((workPanelBindings.length | 0) <= idx$2)) {
          workPanelBindings.push(null);
        }
        var pb = ((!(!(value instanceof $a_Ltrivalibs_graphics_painter_PanelBinding()))) ? value : new ($a_Ltrivalibs_graphics_painter_PanelBinding())(value));
        workPanelBindings[idx$2] = pb;
      }
    }
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, workBindings, workPanelBindings) {
  var i = 0;
  while ((i < (inst.jO().length | 0))) {
    if ((inst.jO()[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.jO()[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.kl().length | 0))) {
    if ((inst.kl()[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.kl()[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.fL).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.hE !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.e;
    var _2 = shade.hE;
    var bg = $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  if ((shade.fM !== null)) {
    var entries = [];
    if ((srcView !== null)) {
      entries.push(({
        "binding": 0,
        "resource": srcView
      }));
    }
    var startIdx = ((srcView !== null) ? 1 : 0);
    var k = startIdx;
    while ((k < (panelBindings.length | 0))) {
      var pb = panelBindings[k];
      if ((pb !== null)) {
        var view = ((!(!pb.depth)) ? pb.panel.l3() : pb.panel.gq((pb.index | 0), (pb.mipLevel | 0)));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.e;
      var _2 = shade.fM;
      var pg = $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
      pass.setBindGroup(1, pg);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.f5]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.P, shape.hG, fmts, depthTest, multisample, shape.aa.hB, shape.hH, shape.aa.hz);
  pass.setPipeline(pipeline);
  pass.setVertexBuffer(0, shape.aa.fz);
  var opt$proxy9 = shape.aa.f3;
  var hasIndex = (opt$proxy9 !== null);
  if (hasIndex) {
    pass.setIndexBuffer(shape.aa.f3, shape.aa.hA);
  }
  var instanceCount = shape.hI.u();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.ew, shape.D);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.P, $thiz.W, $thiz.I);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.P, $thiz.W);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.P, $thiz.I, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.P, shape.ew);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.P, shape.D, null);
    }
    if (hasIndex) {
      pass.drawIndexed(shape.aa.gz);
    } else {
      pass.draw(shape.aa.gA);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.hI.gB[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.ew, shape.D);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.P, $thiz.W, $thiz.I);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.W, $thiz.I);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.P, $thiz.W);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.P, $thiz.I, null);
      if (hasIndex) {
        pass.drawIndexed(shape.aa.gz);
      } else {
        pass.draw(shape.aa.gA);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.f5]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.A, layer.hC, fmts, depthTest, multisample, "triangle-list", "none", "ccw");
  pass.setPipeline(pipeline);
  var instanceCount = layer.hD.u();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.C, layer.R);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.A, $thiz.W, $thiz.I);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.A, $thiz.W);
      var effectiveSrcView = (((($thiz.I.length | 0) > 0) && ($thiz.I[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.A, $thiz.I, effectiveSrcView);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.A, layer.C);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.A, layer.R, srcView);
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.hD.gB[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.C, layer.R);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.A, $thiz.W, $thiz.I);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.W, $thiz.I);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.A, $thiz.W);
      var effectiveSrcView$2 = (((($thiz.I.length | 0) > 0) && ($thiz.I[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.A, $thiz.I, effectiveSrcView$2);
      pass.draw(3);
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, bs) {
  if ((bs === null)) {
    return "n";
  } else {
    var c = bs.color;
    var a = bs.alpha;
    return ((((((((((c.srcFactor + ".") + c.dstFactor) + ".") + c.operation) + "|") + a.srcFactor) + ".") + a.dstFactor) + ".") + a.operation);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shade, blendState, formats, depthTest, multisample, topology, cullMode, frontFace) {
  var key = ((((((((((((((shade.jr + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace);
  if ((!(!(!(!$thiz.gE.hasOwnProperty(key)))))) {
    return $thiz.gE[key];
  } else {
    var targets = [];
    var ti = 0;
    while ((ti < (formats.length | 0))) {
      if ((blendState === null)) {
        var f$proxy7 = formats[ti];
        var target = ({
          "format": f$proxy7
        });
      } else {
        var f$proxy8 = formats[ti];
        var target = ({
          "format": f$proxy8,
          "blend": blendState
        });
      }
      targets.push(target);
      ti = ((1 + ti) | 0);
    }
    if ((shade.hF !== null)) {
      var _2 = shade.gO;
      var _2$1 = [shade.hF];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.gO;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.js;
    var _2$4 = shade.gO;
    var _2$5 = ({
      "module": _2$4,
      "entryPoint": "fs_main",
      "targets": targets
    });
    var _2$6 = ({
      "topology": topology,
      "cullMode": cullMode,
      "frontFace": frontFace
    });
    var desc = ({
      "layout": _2$3,
      "vertex": vertexDescriptor,
      "fragment": _2$5,
      "primitive": _2$6
    });
    if (depthTest) {
      desc.depthStencil = ({
        "format": "depth24plus",
        "depthWriteEnabled": true,
        "depthCompare": "less"
      });
    }
    if (multisample) {
      desc.multisample = ({
        "count": 4
      });
    }
    var p = $thiz.e.createRenderPipeline(desc);
    $thiz.gE[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.fx;
    var _2$1 = ({
      "buffer": _2
    });
    return ({
      "binding": i,
      "resource": _2$1
    });
  } else {
    return ({
      "binding": i,
      "resource": b
    });
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter(device, queue, canvas, context, preferredFormat) {
  this.e = null;
  this.a2 = null;
  this.f4 = null;
  this.jk = null;
  this.f5 = null;
  this.gE = null;
  this.O = 0;
  this.gF = null;
  this.ji = null;
  this.jj = false;
  this.je = null;
  this.jf = false;
  this.jg = null;
  this.jh = false;
  this.jl = null;
  this.jm = false;
  this.jn = null;
  this.jo = false;
  this.jp = null;
  this.jq = false;
  this.gD = null;
  this.W = null;
  this.I = null;
  this.e = device;
  this.a2 = queue;
  this.f4 = canvas;
  this.jk = context;
  this.f5 = preferredFormat;
  this.gE = ({});
  this.O = 0;
  this.gF = [];
  this.gD = ({});
  this.W = [];
  this.I = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.mn = (function(cb) {
  this.gF.push(cb);
  cb.gT((this.f4.width | 0), (this.f4.height | 0));
});
$p.lj = (function(w, h) {
  var k = 0;
  while ((k < (this.gF.length | 0))) {
    this.gF[k].gT(w, h);
    k = ((1 + k) | 0);
  }
});
$p.n1 = (function() {
  return (this.f4.width | 0);
});
$p.lu = (function() {
  return (this.f4.height | 0);
});
$p.kp = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.e;
  var a$proxy1 = ((addressModeU === (void 0)) ? addressMode : addressModeU);
  var a$proxy2 = ((addressModeV === (void 0)) ? addressMode : addressModeV);
  return $x_1.createSampler(({
    "magFilter": magFilter,
    "minFilter": minFilter,
    "mipmapFilter": mipmapFilter,
    "addressModeU": a$proxy1,
    "addressModeV": a$proxy2
  }));
});
$p.ll = (function(geometry, vertices, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).mF(geometry, vertices, topology, frontFace);
});
$p.fn = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).mH(cullMode, blendState);
});
$p.ia = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).mG(blendState, mipSource, mipTarget);
});
$p.h2 = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).mE(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.mJ = (function(panel) {
  var encoder = this.e.createCommandEncoder();
  var swapChainView = this.jk.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.e;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.mq();
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler(this);
  var _2$4 = [({
    "binding": 0,
    "resource": _2$2
  }), ({
    "binding": 1,
    "resource": _2$3
  })];
  var bindGroup = $x_1.createBindGroup(({
    "layout": _2$1,
    "entries": _2$4
  }));
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline(this));
  pass.setBindGroup(0, bindGroup);
  pass.draw(3);
  pass.end();
  this.a2.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  ey: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter$() {
}
$p = $c_Ltrivalibs_graphics_painter_Painter$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter$() {
}
$h_Ltrivalibs_graphics_painter_Painter$.prototype = $p;
$p.ly = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().lq();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).eo;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().lp(canvas);
        var format = maybeGpu.getPreferredCanvasFormat();
        context.configure(({
          "device": device$2,
          "format": format
        }));
        var painter = new $c_Ltrivalibs_graphics_painter_Painter(device$2, queue, canvas, context, format);
        var w = (canvas.clientWidth | 0);
        var h = (canvas.clientHeight | 0);
        canvas.width = w;
        canvas.height = h;
        var observer = new ResizeObserver(((entries$3) => {
          var entry = entries$3[0];
          var rw = (+entry.contentRect.width);
          var rh = (+entry.contentRect.height);
          if (((rw > 0.0) && (rh > 0.0))) {
            canvas.width = $doubleToInt(rw);
            canvas.height = $doubleToInt(rh);
            painter.lj(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().g5(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().g5(f$proxy11));
  }
});
$p.lx = (function(canvas, setup) {
  var promise$proxy4 = this.ly(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().g5(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  ez: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.fC !== null)) {
    var opt$proxy6 = $thiz.fC;
    opt$proxy6.destroy();
  }
  if (($thiz.fH !== null)) {
    var opt$proxy8 = $thiz.fH;
    opt$proxy8.destroy();
  }
  var depthUsage = ($thiz.fB ? 20 : 16);
  var $x_1 = $thiz.ev.e;
  var value = $thiz.f9;
  var value$1 = $thiz.f6;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.fb ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.fC = depthTex;
  $thiz.gG = depthTex.createView();
  if (($thiz.fB && $thiz.fb)) {
    var $x_2 = $thiz.ev.e;
    var value$2 = $thiz.f9;
    var value$3 = $thiz.f6;
    var _2$2 = ({
      "width": value$2,
      "height": value$3
    });
    var resTex = $x_2.createTexture(({
      "size": _2$2,
      "format": "depth24plus",
      "usage": 20,
      "sampleCount": 1
    }));
    $thiz.fH = resTex;
    $thiz.fI = resTex.createView();
    $thiz.fE = true;
  } else {
    $thiz.fH = null;
    $thiz.fI = null;
    $thiz.fE = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.aF.length | 0))) {
    if (($thiz.aF[i].A.fM !== null)) {
      return true;
    }
    i = ((1 + i) | 0);
  }
  return false;
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O($thiz, format$1) {
  return ((format$1 === (void 0)) ? (void 0) : [format$1]);
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O($thiz, shape$1) {
  return ((shape$1 === (void 0)) ? (void 0) : [shape$1]);
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O($thiz, layer$1) {
  return ((layer$1 === (void 0)) ? (void 0) : [layer$1]);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Panel(painter) {
  this.ev = null;
  this.gN = 0;
  this.gM = 0;
  this.gK = null;
  this.fJ = false;
  this.fb = false;
  this.fK = 0;
  this.fa = null;
  this.gL = null;
  this.aF = null;
  this.fL = null;
  this.f8 = null;
  this.eu = null;
  this.gJ = null;
  this.fG = null;
  this.gI = null;
  this.fC = null;
  this.gG = null;
  this.fB = false;
  this.fH = null;
  this.fI = null;
  this.fE = false;
  this.fD = null;
  this.gH = null;
  this.fF = null;
  this.f9 = 0;
  this.f6 = 0;
  this.f7 = null;
  this.ev = painter;
  this.gN = 0;
  this.gM = 0;
  this.gK = null;
  this.fJ = false;
  this.fb = false;
  this.fK = 1;
  this.fa = [];
  this.gL = [];
  this.aF = [];
  this.fL = ({});
  this.f8 = [];
  this.eu = [];
  this.gJ = [];
  this.fG = [];
  this.gI = [];
  this.fC = null;
  this.gG = null;
  this.fB = false;
  this.fH = null;
  this.fI = null;
  this.fE = false;
  this.fD = [];
  this.gH = [];
  this.fF = null;
  this.f9 = 0;
  this.f6 = 0;
  this.f7 = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.ib = (function() {
  if ((this.fK === 0)) {
    var a = this.f9;
    var b = this.f6;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.fK;
  }
});
$p.i4 = (function() {
  return (((this.fa.length | 0) === 0) ? [this.ev.f5] : this.fa);
});
$p.mQ = (function() {
  return (this.i4().length | 0);
});
$p.mR = (function() {
  return this.eu[0];
});
$p.mt = (function() {
  return this.gI[0];
});
$p.jT = (function() {
  return this.gG;
});
$p.mB = (function() {
  return this.fI;
});
$p.mq = (function() {
  return ((this.fF !== null) ? this.fF : this.eu[0]);
});
$p.gq = (function(index, mipLevel) {
  if ((mipLevel < 0)) {
    var sv = this.gJ[index];
    return ((sv !== null) ? sv : this.eu[index]);
  } else {
    var key = ((index + "|") + mipLevel);
    if ((!(!(!(!this.f7.hasOwnProperty(key)))))) {
      return this.f7[key];
    } else {
      var view = this.f8[index].createView(({
        "baseMipLevel": mipLevel,
        "mipLevelCount": 1
      }));
      this.f7[key] = view;
      return view;
    }
  }
});
$p.h4 = (function(index) {
  return this.eu[index];
});
$p.kj = (function(index) {
  return this.gH[index];
});
$p.l3 = (function() {
  if (((!this.fB) && (this.fC !== null))) {
    this.fB = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.fE ? this.fI : this.gG);
});
$p.kW = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.mE = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.gN = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.gM = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.gK = clearColor;
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.fJ = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.fb = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.fK = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.fK = v$5;
    }
  }
  var x = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x !== (void 0))) {
    this.fa = x;
  }
  var x$1 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$1 !== (void 0))) {
    this.gL = x$1;
  }
  var x$2 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$2 !== (void 0))) {
    this.aF = x$2;
  }
  return this;
});
$p.le = (function(canvasW, canvasH) {
  var targetW = ((this.gN === 0) ? canvasW : this.gN);
  var targetH = ((this.gM === 0) ? canvasH : this.gM);
  if (((targetW !== this.f9) || (targetH !== this.f6))) {
    var d = 0;
    while ((d < (this.f8.length | 0))) {
      this.f8[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.fG.length | 0))) {
      this.fG[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.fD.length | 0))) {
      this.fD[d].destroy();
      d = ((1 + d) | 0);
    }
    this.f9 = targetW;
    this.f6 = targetH;
    var mipKeys = Object.keys(this.f7);
    var mk = 0;
    while ((mk < (mipKeys.length | 0))) {
      delete this.f7[mipKeys[mk]];
      mk = ((1 + mk) | 0);
    }
    var mipCount = this.ib();
    var fmts = this.i4();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.f8 = [];
    this.eu = [];
    this.gJ = [];
    this.fG = [];
    this.gI = [];
    this.fD = [];
    this.gH = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.ev.e;
      var _2 = ({
        "width": targetW,
        "height": targetH
      });
      var tex = $x_1.createTexture(({
        "size": _2,
        "format": fmt,
        "usage": 20,
        "mipLevelCount": mipCount
      }));
      this.f8.push(tex);
      this.eu.push(tex.createView(({
        "baseMipLevel": 0,
        "mipLevelCount": 1
      })));
      this.gJ.push(((mipCount > 1) ? tex.createView() : null));
      if (hasPong) {
        var $x_2 = this.ev.e;
        var _2$1 = ({
          "width": targetW,
          "height": targetH
        });
        var pongTex = $x_2.createTexture(({
          "size": _2$1,
          "format": fmt,
          "usage": 20,
          "mipLevelCount": mipCount
        }));
        this.fG.push(pongTex);
        this.gI.push(pongTex.createView(({
          "baseMipLevel": 0,
          "mipLevelCount": 1
        })));
      }
      if (this.fb) {
        var $x_3 = this.ev.e;
        var _2$2 = ({
          "width": targetW,
          "height": targetH
        });
        var msaaTex = $x_3.createTexture(({
          "size": _2$2,
          "format": fmt,
          "sampleCount": 4,
          "usage": 16
        }));
        this.fD.push(msaaTex);
        this.gH.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (this.fJ) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  eA: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.jr = 0;
  this.gO = null;
  this.hF = null;
  this.hE = null;
  this.fM = null;
  this.js = null;
  this.ar = null;
  this.a9 = null;
  this.jr = id;
  this.gO = shaderModule;
  this.hF = vertexBufferLayout;
  this.hE = valueBindGroupLayout;
  this.fM = panelBindGroupLayout;
  this.js = pipelineLayout;
  this.ar = uniformIndices;
  this.a9 = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  eB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_WebGPU$() {
}
$p = $c_Ltrivalibs_graphics_painter_WebGPU$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_WebGPU$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_WebGPU$() {
}
$h_Ltrivalibs_graphics_painter_WebGPU$.prototype = $p;
$p.lq = (function() {
  return window.navigator.gpu;
});
$p.lp = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  eD: 1
}));
var $n_Ltrivalibs_graphics_painter_WebGPU$;
function $m_Ltrivalibs_graphics_painter_WebGPU$() {
  if ((!$n_Ltrivalibs_graphics_painter_WebGPU$)) {
    $n_Ltrivalibs_graphics_painter_WebGPU$ = new $c_Ltrivalibs_graphics_painter_WebGPU$();
  }
  return $n_Ltrivalibs_graphics_painter_WebGPU$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(sensitivity, speed) {
  this.hJ = 0.0;
  this.jt = 0.0;
  this.hJ = sensitivity;
  this.jt = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.mW = (function(cam, input, tpf) {
  var dist = ((this.jt * tpf) / 1000.0);
  var forward = 0.0;
  if (((input.ac("KeyW") || input.ac("ArrowUp")) || input.gR)) {
    forward = (forward + dist);
  }
  if (((input.ac("KeyS") || input.ac("ArrowDown")) || input.lB(2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((input.ac("KeyA") || input.ac("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((input.ac("KeyD") || input.ac("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (input.ac("Space")) {
    up = (up + dist);
  }
  if ((input.ac("ShiftLeft") || input.ac("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = input.l2();
  var deltaH = (((-(+drag.M)) * this.hJ) / 1000.0);
  var deltaV = (((-(+drag.U)) * this.hJ) / 1000.0);
  cam.mj(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  eE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.fd = 0.0;
  this.fN = 0.0;
  this.fe = 0.0;
  this.fc = 0.0;
  this.X = 0.0;
  this.as = 0.0;
  this.J = null;
  this.hK = null;
  this.fd = fov;
  this.fN = aspect;
  this.fe = near;
  this.fc = far;
  this.X = rotH;
  this.as = rotV;
  this.J = pos;
  this.hK = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.ic = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.fd) || (aspect !== this.fN)) || (near !== this.fe)) || (far !== this.fc));
  this.fd = fov;
  this.fN = aspect;
  this.fe = near;
  this.fc = far;
  if ((rotH !== this.X)) {
    this.X = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ih(rotH);
  }
  if ((rotV !== this.as)) {
    this.as = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ig(rotV);
  }
  this.J = pos;
  if (needsProj) {
    this.hK = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  }
});
$p.mj = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.X = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ih((this.X + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.as = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ig((this.as + deltaV));
  }
  if ((up !== 0.0)) {
    this.J = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.J.n, (this.J.m + up), this.J.o);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().B();
    var $x_3 = this.J;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().B();
    var p$proxy1 = this.X;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.X;
    this.J = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().B();
    var $x_8 = this.J;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().B();
    var p$proxy3 = this.X;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.X;
    this.J = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.mT = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.J, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().ln(this.X), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().lm(this.as)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.mZ = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().i8();
  var t = this.mT();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().lo(t.jw, t.ju, t.jv), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  eF: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera$;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera$.prototype = $p;
$p.ih = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.ig = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.kP = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.ih(rotH), this.ig(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  eG: 1
}));
var $n_Ltrivalibs_graphics_scene_PerspectiveCamera$;
function $m_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
  if ((!$n_Ltrivalibs_graphics_scene_PerspectiveCamera$)) {
    $n_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $c_Ltrivalibs_graphics_scene_PerspectiveCamera$();
  }
  return $n_Ltrivalibs_graphics_scene_PerspectiveCamera$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_Transform(translation, rotation, scale) {
  this.jw = null;
  this.ju = null;
  this.jv = null;
  this.jw = translation;
  this.ju = rotation;
  this.jv = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  eH: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.ak) + ") ") + b.ay) + ": ")) + b.al);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().kz($m_sjs_js_ArrayOps$().ky(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.M;
        if ((x11 !== null)) {
          var name = x11.M;
          var typ = x11.U;
          var $x_1 = (((((("  @location(" + (x0.U | 0)) + ") ") + name) + ": ") + typ) + ",");
          break matchResult3;
        }
      }
      throw new $c_s_MatchError(x0);
    }
    res[$x_2] = $x_1;
    i = ((1 + i) | 0);
  }
  var len$1 = (builtins.length | 0);
  var res$1 = new Array(len$1);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    var $x_4 = i$1;
    var x0$1 = builtins[i$1];
    matchResult4: {
      var $x_3;
      if ((x0$1 !== null)) {
        var name$1 = x0$1.ay;
        var builtin = x0$1.ak;
        var typ$1 = x0$1.al;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().b(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().kz($m_sjs_js_ArrayOps$().ky(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.M;
        if ((x20 !== null)) {
          var name = x20.M;
          var typ = x20.U;
          var bindingIdx = (x0.U | 0);
          var $x_2 = ((typ === "sampler") ? (((((("@group(" + groupIdx) + ") @binding(") + bindingIdx) + ") var ") + name) + ": sampler;") : (((((((("@group(" + groupIdx) + ") @binding(") + bindingIdx) + ") var<uniform> ") + name) + ": ") + typ) + ";"));
          break matchResult5;
        }
      }
      throw new $c_s_MatchError(x0);
    }
    res[$x_3] = $x_2;
    i = ((1 + i) | 0);
  }
  var $x_1 = res.join("\n");
  return $x_1;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_derive$() {
}
$p = $c_Ltrivalibs_graphics_shader_derive$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_derive$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_derive$() {
}
$h_Ltrivalibs_graphics_shader_derive$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_derive$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_derive$, "trivalibs.graphics.shader.derive$", ({
  eK: 1
}));
var $n_Ltrivalibs_graphics_shader_derive$;
function $m_Ltrivalibs_graphics_shader_derive$() {
  if ((!$n_Ltrivalibs_graphics_shader_derive$)) {
    $n_Ltrivalibs_graphics_shader_derive$ = new $c_Ltrivalibs_graphics_shader_derive$();
  }
  return $n_Ltrivalibs_graphics_shader_derive$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(target) {
  this.ai = null;
  this.ai = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  eL: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.hM = null;
  this.av = null;
  this.hM = ({});
  this.av = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.kt = (function(d) {
  if ((!(!(!(!(!this.hM.hasOwnProperty(d.name))))))) {
    this.hM[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.kt(array[i]);
      i = ((1 + i) | 0);
    }
    this.av.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  eM: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.x = null;
  this.x = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.ks = (function(d) {
  var r = this.x;
  if ((r !== null)) {
    r.kt(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  eN: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
function $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_FnRegistry$)) {
    $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(in$1, out, bindings, locals, textures) {
  this.ff = null;
  this.fg = null;
  this.ex = null;
  this.kE = null;
  this.jx = null;
  this.ff = in$1;
  this.fg = out;
  this.ex = bindings;
  this.kE = textures;
  this.jx = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position");
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  eO: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.hN.hasOwnProperty(data.name))))))) {
    var dict = $thiz.hN;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.hO.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.ey = null;
  this.hO = null;
  this.hN = null;
  this.ey = "";
  this.hO = [];
  this.hN = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.fm = (function() {
  return this.hO.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  eP: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.hP.hasOwnProperty(data.name))))))) {
    var dict = $thiz.hP;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.hQ.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.fQ = null;
  this.fP = null;
  this.hQ = null;
  this.hP = null;
  this.fQ = "";
  this.fP = "";
  this.hQ = [];
  this.hP = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.fm = (function() {
  return this.hQ.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  eQ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.fR = null;
  this.fS = null;
  this.jy = null;
  this.fR = in$1;
  this.fS = out;
  this.jy = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  eV: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
}
$h_Ltrivalibs_graphics_shader_dsl_WgslFnData$.prototype = $p;
$p.kH = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  eX: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
function $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_WgslFnData$)) {
    $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
}
$h_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$.prototype = $p;
$p.kk = (function(fn) {
  return fn.name;
});
$p.eB = (function(fn, ds) {
  var seen = ({});
  var merged = [];
  var i = 0;
  while ((i < (fn.deps.length | 0))) {
    var d = fn.deps[i];
    if ((!(!(!(!(!seen.hasOwnProperty(d.name))))))) {
      seen[d.name] = true;
      merged.push(d);
    }
    i = ((1 + i) | 0);
  }
  ds.g4(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  eY: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
function $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$)) {
    $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
}
function $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($thiz, sizes) {
  var offsets = [];
  var elem = 0;
  elem = 0;
  var len = (sizes.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = sizes[i];
    var size = (x0 | 0);
    offsets.push(elem);
    elem = ((elem + size) | 0);
    i = ((1 + i) | 0);
  }
  return offsets;
}
function $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($thiz, sizes) {
  var elem = 0;
  elem = 0;
  var len = (sizes.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = sizes[i];
    var size = (x0 | 0);
    elem = ((elem + size) | 0);
    i = ((1 + i) | 0);
  }
  return elem;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_layouts$() {
}
$p = $c_Ltrivalibs_graphics_shader_layouts$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_layouts$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_layouts$() {
}
$h_Ltrivalibs_graphics_shader_layouts$.prototype = $p;
$p.aw = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  eZ: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
  this.jA = null;
  $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().b(["tex"], $m_sjs_js_ArrayOpsCommon$().b(["s"], $m_sjs_js_ArrayOpsCommon$().b(["diameter"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["dir"], []))))));
  var types = $m_sjs_js_ArrayOpsCommon$().b(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["sampler"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []))))));
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn gaussian_blur(" + paramList) + ") -> vec4<f32> {\n  let sigma = diameter * 0.25;\n  let support: i32 = i32(ceil(sigma * 1.5));\n  let offset = dir / res;\n  let exp_factor = -1.0 / (2.0 * sigma * sigma);\n  var sum = textureSample(tex, s, uv);\n  var weight_sum = 1.0;\n  var i: i32 = 1;\n  while (i <= support) {\n    let j = f32(i);\n    let w0 = exp(exp_factor * j * j);\n    let w1 = exp(exp_factor * (j + 1.0) * (j + 1.0));\n    let uv_offset = offset * (j + w1 / (w0 + w1));\n    let weight = w0 + w1;\n    sum += (textureSample(tex, s, uv + uv_offset) + textureSample(tex, s, uv - uv_offset)) * weight;\n    weight_sum += weight * 2.0;\n    i = i + 2;\n  }\n  return sum / weight_sum;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], $m_sjs_js_ArrayOpsCommon$().b(["s"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["dir"], [])))));
  var types$2 = $m_sjs_js_ArrayOpsCommon$().b(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["sampler"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], [])))));
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn gaussian_blur_5(" + paramList$2) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.3333333333333333) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.29411764705882354;\n  color += textureSample(tex, s, uv + off1) * 0.35294117647058826;\n  color += textureSample(tex, s, uv - off1) * 0.35294117647058826;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_5", src$2);
  var names$3 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], $m_sjs_js_ArrayOpsCommon$().b(["s"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["dir"], [])))));
  var types$3 = $m_sjs_js_ArrayOpsCommon$().b(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["sampler"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], [])))));
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn gaussian_blur_9(" + paramList$3) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.3846153846) * dir / res;\n  let off2 = vec2<f32>(3.2307692308) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.2270270270;\n  color += textureSample(tex, s, uv + off1) * 0.3162162162;\n  color += textureSample(tex, s, uv - off1) * 0.3162162162;\n  color += textureSample(tex, s, uv + off2) * 0.0702702703;\n  color += textureSample(tex, s, uv - off2) * 0.0702702703;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_9", src$3);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], $m_sjs_js_ArrayOpsCommon$().b(["s"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["dir"], [])))));
  var types$4 = $m_sjs_js_ArrayOpsCommon$().b(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["sampler"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], [])))));
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn gaussian_blur_13(" + paramList$4) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.411764705882353) * dir / res;\n  let off2 = vec2<f32>(3.2941176470588234) * dir / res;\n  let off3 = vec2<f32>(5.176470588235294) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.1964825501511404;\n  color += textureSample(tex, s, uv + off1) * 0.2969069646728344;\n  color += textureSample(tex, s, uv - off1) * 0.2969069646728344;\n  color += textureSample(tex, s, uv + off2) * 0.09447039785044732;\n  color += textureSample(tex, s, uv - off2) * 0.09447039785044732;\n  color += textureSample(tex, s, uv + off3) * 0.010381362401148057;\n  color += textureSample(tex, s, uv - off3) * 0.010381362401148057;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_13", src$4);
  var names$5 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], $m_sjs_js_ArrayOpsCommon$().b(["s"], $m_sjs_js_ArrayOpsCommon$().b(["diameter"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["dir"], []))))));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().b(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["sampler"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []))))));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn box_blur(" + paramList$5) + ") -> vec4<f32> {\n  let support: i32 = i32(floor(diameter * 0.5));\n  let offset = dir / res;\n  var sum = textureSample(tex, s, uv);\n  var i: i32 = 1;\n  while (i <= support) {\n    sum += textureSample(tex, s, uv + offset * f32(i)) + textureSample(tex, s, uv - offset * f32(i));\n    i = i + 1;\n  }\n  return sum / (1.0 + f32(support) * 2.0);\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur", src$5);
  var names$6 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], $m_sjs_js_ArrayOpsCommon$().b(["s"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["radius"], [])))));
  var types$6 = $m_sjs_js_ArrayOpsCommon$().b(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["sampler"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], [])))));
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn box_blur_2d(" + paramList$6) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n  var color = textureSample(tex, s, uv - o);\n  color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n  color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n  color += textureSample(tex, s, uv + o);\n  return color * 0.25;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d", src$6);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], $m_sjs_js_ArrayOpsCommon$().b(["s"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["radius"], [])))));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().b(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["sampler"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], [])))));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn tent_blur_2d(" + paramList$7) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n  var color = textureSample(tex, s, uv) * 0.25;\n  color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n  color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d", src$7);
  var names$8 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], $m_sjs_js_ArrayOpsCommon$().b(["s"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["radius"], []))));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().b(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["sampler"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], []))));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn box_blur_2d_auto(" + paramList$8) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n  var color = textureSample(tex, s, uv - o);\n  color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n  color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n  color += textureSample(tex, s, uv + o);\n  return color * 0.25;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d_auto", src$8);
  var names$9 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], $m_sjs_js_ArrayOpsCommon$().b(["s"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["radius"], []))));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().b(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["sampler"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], []))));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn tent_blur_2d_auto(" + paramList$9) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n  var color = textureSample(tex, s, uv) * 0.25;\n  color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n  color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n  return color;\n}");
  this.jA = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d_auto", src$9);
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  f0: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$() {
  this.jB = null;
  this.jC = null;
  this.jD = null;
  this.hU = null;
  this.hV = null;
  this.jE = null;
  $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().b(["x"], []);
  var types = $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []);
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn mod289v3f(" + paramList) + ") -> vec3<f32> {\n  return x - floor(x / 289.0) * 289.0;\n}");
  this.jB = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("mod289v3f", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().b(["x"], []);
  var types$2 = $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []);
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn mod289v4f(" + paramList$2) + ") -> vec4<f32> {\n  return x - floor(x / 289.0) * 289.0;\n}");
  this.jC = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("mod289v4f", src$2);
  var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$3 = $m_sjs_js_ArrayOpsCommon$().b(["i"], []);
  var types$3 = $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []);
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn permute289v4f(" + paramList$3) + ") -> vec4<f32> {\n\n  var im: vec4<f32> = mod289v4f(i);\n  return mod289v4f((im*34.0 + 10.0)*im);\n}");
  this.jD = $x_1.eB(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute289v4f", src$3), new $c_sjsr_WrappedVarArgs([this.jC]));
  var $x_2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$4 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], $m_sjs_js_ArrayOpsCommon$().b(["period"], $m_sjs_js_ArrayOpsCommon$().b(["normRot"], [])));
  var types$4 = $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], [])));
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn tiling_rot_noise_2d(" + paramList$4) + ") -> vec3<f32> {\n\n  let alpha = normRot * 6.28318530718;\n  var uv: vec2<f32>;\n  var f0: vec2<f32>;\n  var i0: vec2<f32>;\n  var i1: vec2<f32>;\n  var i2: vec2<f32>;\n  var o1: vec2<f32>;\n  var v0: vec2<f32>;\n  var v1: vec2<f32>;\n  var v2: vec2<f32>;\n  var x0: vec2<f32>;\n  var x1: vec2<f32>;\n  var x2: vec2<f32>;\n  uv = vec2<f32>(pos.x+pos.y*0.5, pos.y);\n  i0 = floor(uv);\n  f0 = uv - i0;\n  o1 = select(vec2<f32>(0.0,1.0), vec2<f32>(1.0, 0.0), f0.x > f0.y);\n  i1 = i0 + o1;\n  i2 = i0 + vec2<f32>(1.0, 1.0);\n  v0 = vec2<f32>(i0.x - i0.y*0.5, i0.y);\n  v1 = vec2<f32>(v0.x + o1.x - o1.y*0.5, v0.y + o1.y);\n  v2 = vec2<f32>(v0.x + 0.5, v0.y + 1.0);\n  x0 = pos - v0;\n  x1 = pos - v1;\n  x2 = pos - v2;\n  var iu: vec3<f32>;\n  var iv: vec3<f32>;\n  var xw: vec3<f32>;\n  var yw: vec3<f32>;\n  if(any(period > vec2<f32>(0.0, 0.0))) {\n    xw = vec3<f32>(v0.x, v1.x, v2.x);\n    yw = vec3<f32>(v0.y, v1.y, v2.y);\n    if(period.x > 0.0) {\n      xw = xw - floor(vec3<f32>(v0.x, v1.x, v2.x) / period.x) * period.x;\n    }\n    if(period.y > 0.0) {\n      yw = yw - floor(vec3<f32>(v0.y, v1.y, v2.y) / period.y) * period.y;\n    }\n    iu = floor(xw + 0.5*yw + 0.5);\n    iv = floor(yw + 0.5);\n  } else {\n    iu = vec3<f32>(i0.x, i1.x, i2.x);\n    iv = vec3<f32>(i0.y, i1.y, i2.y);\n  }\n  var hash: vec3<f32>;\n  var psi: vec3<f32>;\n  var gx: vec3<f32>;\n  var gy: vec3<f32>;\n  var g0: vec2<f32>;\n  var g1: vec2<f32>;\n  var g2: vec2<f32>;\n  hash = mod289v3f(iu);\n  hash = mod289v3f((hash*51.0 + 2.0)*hash + iv);\n  hash = mod289v3f((hash*34.0 + 10.0)*hash);\n  psi = hash*0.07482 + alpha;\n  gx = cos(psi);\n  gy = sin(psi);\n  g0 = vec2<f32>(gx.x, gy.x);\n  g1 = vec2<f32>(gx.y, gy.y);\n  g2 = vec2<f32>(gx.z, gy.z);\n  var w: vec3<f32>;\n  var w2: vec3<f32>;\n  var w4: vec3<f32>;\n  var gdotx: vec3<f32>;\n  var n: f32;\n  w = 0.8 - vec3<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2));\n  w = max(w, vec3<f32>(0.0, 0.0, 0.0));\n  w2 = w*w;\n  w4 = w2*w2;\n  gdotx = vec3<f32>(dot(g0, x0), dot(g1, x1), dot(g2, x2));\n  n = 10.9*dot(w4, gdotx);\n  var w3: vec3<f32>;\n  var dw: vec3<f32>;\n  var dn0: vec2<f32>;\n  var dn1: vec2<f32>;\n  var dn2: vec2<f32>;\n  var grad: vec2<f32>;\n  w3 = w2*w;\n  dw = -8.0*w3*gdotx;\n  dn0 = w4.x*g0 + dw.x*x0;\n  dn1 = w4.y*g1 + dw.y*x1;\n  dn2 = w4.z*g2 + dw.z*x2;\n  grad = 10.9*(dn0 + dn1 + dn2);\n  return vec3<f32>(n, grad.x, grad.y);\n}");
  this.hU = $x_2.eB(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_rot_noise_2d", src$4), new $c_sjsr_WrappedVarArgs([this.jB]));
  var $x_3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$5 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], $m_sjs_js_ArrayOpsCommon$().b(["period"], []));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn tiling_noise_2d(" + paramList$5) + ") -> vec3<f32> {\n  return tiling_rot_noise_2d(pos, period, 0.0);\n}");
  $x_3.eB(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_noise_2d", src$5), new $c_sjsr_WrappedVarArgs([this.hU]));
  var $x_4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$6 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], $m_sjs_js_ArrayOpsCommon$().b(["normRot"], []));
  var types$6 = $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], []));
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn rot_noise_2d(" + paramList$6) + ") -> vec3<f32> {\n  return tiling_rot_noise_2d(pos, vec2<f32>(0.0, 0.0), normRot);\n}");
  $x_4.eB(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("rot_noise_2d", src$6), new $c_sjsr_WrappedVarArgs([this.hU]));
  var $x_5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$7 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], $m_sjs_js_ArrayOpsCommon$().b(["period"], $m_sjs_js_ArrayOpsCommon$().b(["normRot"], [])));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], [])));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn tiling_rot_noise_3d(" + paramList$7) + ") -> vec4<f32> {\n\n  let alpha = normRot * 6.28318530718;\n  let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0);\n  let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\n  var uvw: vec3<f32>;\n  var i0: vec3<f32>;\n  var i1: vec3<f32>;\n  var i2: vec3<f32>;\n  var i3: vec3<f32>;\n  var f0: vec3<f32>;\n  var gt_: vec3<f32>;\n  var lt_: vec3<f32>;\n  var gt: vec3<f32>;\n  var lt: vec3<f32>;\n  var o1: vec3<f32>;\n  var o2: vec3<f32>;\n  var v0: vec3<f32>;\n  var v1: vec3<f32>;\n  var v2: vec3<f32>;\n  var v3: vec3<f32>;\n  var x0: vec3<f32>;\n  var x1: vec3<f32>;\n  var x2: vec3<f32>;\n  var x3: vec3<f32>;\n  uvw = M * pos;\n  i0 = floor(uvw);\n  f0 = uvw - i0;\n  gt_ = step(f0.xyx, f0.yzz);\n  lt_ = 1.0 - gt_;\n  gt = vec3<f32>(lt_.z, gt_.xy);\n  lt = vec3<f32>(lt_.xy, gt_.z);\n  o1 = min(gt, lt);\n  o2 = max(gt, lt);\n  i1 = i0 + o1;\n  i2 = i0 + o2;\n  i3 = i0 + vec3<f32>(1.0, 1.0, 1.0);\n  v0 = Mi * i0;\n  v1 = Mi * i1;\n  v2 = Mi * i2;\n  v3 = Mi * i3;\n  x0 = pos - v0;\n  x1 = pos - v1;\n  x2 = pos - v2;\n  x3 = pos - v3;\n  var vx: vec4<f32>;\n  var vy: vec4<f32>;\n  var vz: vec4<f32>;\n  if(any(period > vec3<f32>(0.0))) {\n    vx = vec4<f32>(v0.x, v1.x, v2.x, v3.x);\n    vy = vec4<f32>(v0.y, v1.y, v2.y, v3.y);\n    vz = vec4<f32>(v0.z, v1.z, v2.z, v3.z);\n    if(period.x > 0.0) {\n      vx = vx - floor(vx / period.x) * period.x;\n    }\n    if(period.y > 0.0) {\n      vy = vy - floor(vy / period.y) * period.y;\n    }\n    if(period.z > 0.0) {\n      vz = vz - floor(vz / period.z) * period.z;\n    }\n    i0 = floor(M * vec3<f32>(vx.x, vy.x, vz.x) + 0.5);\n    i1 = floor(M * vec3<f32>(vx.y, vy.y, vz.y) + 0.5);\n    i2 = floor(M * vec3<f32>(vx.z, vy.z, vz.z) + 0.5);\n    i3 = floor(M * vec3<f32>(vx.w, vy.w, vz.w) + 0.5);\n  }\n  var hash: vec4<f32>;\n  var theta: vec4<f32>;\n  var sz: vec4<f32>;\n  var psi: vec4<f32>;\n  var St: vec4<f32>;\n  var Ct: vec4<f32>;\n  var sz_: vec4<f32>;\n  hash = permute289v4f(permute289v4f(permute289v4f(\n    vec4<f32>(i0.z, i1.z, i2.z, i3.z))\n    + vec4<f32>(i0.y, i1.y, i2.y, i3.y))\n    + vec4<f32>(i0.x, i1.x, i2.x, i3.x));\n  theta = hash * 3.883222077;\n  sz = hash * -0.006920415 + 0.996539792;\n  psi = hash * 0.108705628;\n  Ct = cos(theta);\n  St = sin(theta);\n  sz_ = sqrt(1.0 - sz*sz);\n  var gx: vec4<f32>;\n  var gy: vec4<f32>;\n  var gz: vec4<f32>;\n  var px: vec4<f32>;\n  var py: vec4<f32>;\n  var pz: vec4<f32>;\n  var Sp: vec4<f32>;\n  var Cp: vec4<f32>;\n  var Ctp: vec4<f32>;\n  var qx: vec4<f32>;\n  var qy: vec4<f32>;\n  var qz: vec4<f32>;\n  var Sa: vec4<f32>;\n  var Ca: vec4<f32>;\n  if(alpha != 0.0) {\n    px = Ct * sz_;\n    py = St * sz_;\n    pz = sz;\n    Sp = sin(psi);\n    Cp = cos(psi);\n    Ctp = St*Sp - Ct*Cp;\n    qx = mix(Ctp*St, Sp, sz);\n    qy = mix(-Ctp*Ct, Cp, sz);\n    qz = -(py*Cp + px*Sp);\n    Sa = vec4<f32>(sin(alpha));\n    Ca = vec4<f32>(cos(alpha));\n    gx = Ca*px + Sa*qx;\n    gy = Ca*py + Sa*qy;\n    gz = Ca*pz + Sa*qz;\n  } else {\n    gx = Ct * sz_;\n    gy = St * sz_;\n    gz = sz;\n  }\n  var g0: vec3<f32>;\n  var g1: vec3<f32>;\n  var g2: vec3<f32>;\n  var g3: vec3<f32>;\n  var w: vec4<f32>;\n  var w2: vec4<f32>;\n  var w3: vec4<f32>;\n  var gdotx: vec4<f32>;\n  var n: f32;\n  g0 = vec3<f32>(gx.x, gy.x, gz.x);\n  g1 = vec3<f32>(gx.y, gy.y, gz.y);\n  g2 = vec3<f32>(gx.z, gy.z, gz.z);\n  g3 = vec3<f32>(gx.w, gy.w, gz.w);\n  w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\n  w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\n  w2 = w * w;\n  w3 = w2 * w;\n  gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\n  n = 39.5 * dot(w3, gdotx);\n  var dw: vec4<f32> = -6.0 * w2 * gdotx;\n  var dn0: vec3<f32> = w3.x * g0 + dw.x * x0;\n  var dn1: vec3<f32> = w3.y * g1 + dw.y * x1;\n  var dn2: vec3<f32> = w3.z * g2 + dw.z * x2;\n  var dn3: vec3<f32> = w3.w * g3 + dw.w * x3;\n  var grad: vec3<f32> = 39.5 * (dn0 + dn1 + dn2 + dn3);\n  return vec4<f32>(n, grad.x, grad.y, grad.z);\n}");
  this.hV = $x_5.eB(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_rot_noise_3d", src$7), new $c_sjsr_WrappedVarArgs([this.jD]));
  var $x_6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$8 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], $m_sjs_js_ArrayOpsCommon$().b(["period"], []));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn tiling_noise_3d(" + paramList$8) + ") -> vec4<f32> {\n  return tiling_rot_noise_3d(pos, period, 0.0);\n}");
  this.jE = $x_6.eB(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_noise_3d", src$8), new $c_sjsr_WrappedVarArgs([this.hV]));
  var $x_7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$9 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], $m_sjs_js_ArrayOpsCommon$().b(["normRot"], []));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], []));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn rot_noise_3d(" + paramList$9) + ") -> vec4<f32> {\n  return tiling_rot_noise_3d(pos, vec3<f32>(0.0, 0.0, 0.0), normRot);\n}");
  $x_7.eB(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("rot_noise_3d", src$9), new $c_sjsr_WrappedVarArgs([this.hV]));
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$, "trivalibs.graphics.shader.lib.random.Psrdnoise$", ({
  f1: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$;
function $m_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$)) {
    $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$ = new $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.jF = null;
  this.hW = null;
  this.fT = 0;
  this.fU = 0.0;
  this.gP = 0.0;
  this.gQ = 0.0;
  this.hX = false;
  this.jF = frame;
  this.hW = onFpsCallback;
  this.fT = 0;
  this.fU = 0.0;
  this.gP = 0.0;
  this.gQ = (-1.0);
  this.hX = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.kn = (function(time) {
  this.fT = ((1 + this.fT) | 0);
  if ((this.fU === 0.0)) {
    this.fU = time;
    this.gP = time;
  }
  var fpsElapsed = (time - this.fU);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.fT) / fpsElapsed);
    if (((time - this.gP) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().fq(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().fo(args$proxy1));
      this.gP = time;
      if ((this.hW !== null)) {
        (0, this.hW)(fps);
      }
    }
    this.fT = 0;
    this.fU = time;
  }
  var delta = ((this.gQ < 0.0) ? 0.0 : (time - this.gQ));
  this.gQ = time;
  (0, this.jF)(delta);
  if (this.hX) {
    requestAnimationFrame($m_sjs_js_Any$().g5(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.kn((+v1$2));
    }))));
  }
});
$p.mM = (function() {
  this.hX = true;
  return requestAnimationFrame($m_sjs_js_Any$().g5(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.kn((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  f5: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_animation_animate$package$() {
}
$p = $c_Ltrivalibs_utils_animation_animate$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_animate$package$;
/** @constructor */
function $h_Ltrivalibs_utils_animation_animate$package$() {
}
$h_Ltrivalibs_utils_animation_animate$package$.prototype = $p;
$p.kO = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.mM();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  f6: 1
}));
var $n_Ltrivalibs_utils_animation_animate$package$;
function $m_Ltrivalibs_utils_animation_animate$package$() {
  if ((!$n_Ltrivalibs_utils_animation_animate$package$)) {
    $n_Ltrivalibs_utils_animation_animate$package$ = new $c_Ltrivalibs_utils_animation_animate$package$();
  }
  return $n_Ltrivalibs_utils_animation_animate$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, holdDelay, holdRadius, suppressContextMenu, onActivity, focusOnPointerDown) {
  this.y = null;
  this.fX = null;
  this.gS = null;
  this.fV = 0.0;
  this.fW = 0.0;
  this.gR = false;
  this.jH = null;
  this.jG = null;
  this.y = onActivity;
  this.fX = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
  this.gS = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
  this.fV = 0.0;
  this.fW = 0.0;
  this.gR = false;
  $m_Ltrivalibs_utils_events_keyboard$package$().lE(keyTarget, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!this.fX.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      this.fX[k$3] = value$proxy1;
      if ((!(this.y === (void 0)))) {
        var m$proxy1 = this.y;
        m$proxy1();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete this.fX[k$3$1];
    if ((!(this.y === (void 0)))) {
      var m$proxy2 = this.y;
      m$proxy2();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().mr(el, $m_Ltrivalibs_utils_events_pointer$package$().ms(), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2, v2$2, v3$2) => {
    var b = (v1$2 | 0);
    if (focusOnPointerDown) {
      keyTarget.focus();
    }
    var key$proxy3 = ("" + b);
    this.gS[key$proxy3] = true;
    if ((!(this.y === (void 0)))) {
      var m$proxy3 = this.y;
      m$proxy3();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var b$1 = (v1$2$1 | 0);
    delete this.gS[("" + b$1)];
    if ((!(this.y === (void 0)))) {
      var m$proxy4 = this.y;
      m$proxy4();
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2) => (void 0))), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    if ((!(this.y === (void 0)))) {
      var m$proxy5 = this.y;
      m$proxy5();
    }
  })), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$3, v2$2$3) => {
    var dx = (+v1$2$3);
    var dy = (+v2$2$3);
    this.fV = (this.fV + dx);
    this.fW = (this.fW + dy);
    if ((!(this.y === (void 0)))) {
      var m$proxy6 = this.y;
      m$proxy6();
    }
  })), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    this.gR = false;
    if ((!(this.y === (void 0)))) {
      var m$proxy7 = this.y;
      m$proxy7();
    }
  })), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$4, v2$2$4) => {
    this.gR = true;
    if ((!(this.y === (void 0)))) {
      var m$proxy8 = this.y;
      m$proxy8();
    }
  })), holdDelay, holdRadius, suppressContextMenu);
  if ($m_sr_BoxesRunTime$().a(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().a(keyTarget, document.activeElement);
  }
  this.jH = ((_$5$3) => {
    if ((!(this.y === (void 0)))) {
      var m$proxy9 = this.y;
      m$proxy9();
    }
  });
  this.jG = ((_$6$3) => {
    if ((!(this.y === (void 0)))) {
      var m$proxy10 = this.y;
      m$proxy10();
    }
  });
  keyTarget.addEventListener("focus", this.jH);
  keyTarget.addEventListener("blur", this.jG);
}
$p = $c_Ltrivalibs_utils_events_InputState.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_InputState;
/** @constructor */
function $h_Ltrivalibs_utils_events_InputState() {
}
$h_Ltrivalibs_utils_events_InputState.prototype = $p;
$p.ac = (function(key) {
  return (!(!(!(!this.fX.hasOwnProperty(key)))));
});
$p.lB = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.gS.hasOwnProperty(key$proxy7)))));
});
$p.l2 = (function() {
  var x$proxy1 = new $c_T2(this.fV, this.fW);
  this.fV = 0.0;
  this.fW = 0.0;
  return x$proxy1;
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  f7: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_PointerTracker(holdRadius) {
  this.jI = 0.0;
  this.fZ = false;
  this.g0 = false;
  this.g1 = false;
  this.hY = 0.0;
  this.hZ = 0.0;
  this.fY = 0.0;
  this.jI = holdRadius;
  this.fZ = false;
  this.g0 = false;
  this.g1 = false;
  this.hY = 0.0;
  this.hZ = 0.0;
  this.fY = 0.0;
}
$p = $c_Ltrivalibs_utils_events_PointerTracker.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_PointerTracker;
/** @constructor */
function $h_Ltrivalibs_utils_events_PointerTracker() {
}
$h_Ltrivalibs_utils_events_PointerTracker.prototype = $p;
$p.lb = (function(x, y) {
  this.g1 = true;
  this.fZ = true;
  this.g0 = false;
  this.hY = x;
  this.hZ = y;
  this.fY = 0.0;
});
$p.mk = (function(x, y) {
  if (this.g1) {
    var ddx = (x - this.hY);
    var ddy = (y - this.hZ);
    var p$proxy1 = ((ddx * ddx) + (ddy * ddy));
    var d = (+Math.sqrt(p$proxy1));
    if ((d > this.fY)) {
      this.fY = d;
    }
  }
});
$p.mV = (function() {
  this.g1 = false;
  this.fZ = false;
  this.g0 = false;
});
$p.kY = (function() {
  if (((this.g1 && (!this.g0)) && (this.fY <= this.jI))) {
    this.g0 = true;
    return true;
  } else {
    return false;
  }
});
var $d_Ltrivalibs_utils_events_PointerTracker = new $TypeData().i($c_Ltrivalibs_utils_events_PointerTracker, "trivalibs.utils.events.PointerTracker", ({
  f8: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$p = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = $p;
$p.lz = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity) {
  canvas.setAttribute("tabindex", "0");
  var \u03b41$ = canvas.style;
  \u03b41$.setProperty("outline", "none");
  var input = new $c_Ltrivalibs_utils_events_InputState(canvas, canvas, holdDelay, holdRadius, suppressContextMenu, onActivity, true);
  if (initialFocus) {
    canvas.focus();
  }
  return input;
});
var $d_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$, "trivalibs.utils.events.interactive_canvas$package$", ({
  f9: 1
}));
var $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
function $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
  if ((!$n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$)) {
    $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$();
  }
  return $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_keyboard$package$() {
}
$p = $c_Ltrivalibs_utils_events_keyboard$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_keyboard$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_keyboard$package$() {
}
$h_Ltrivalibs_utils_events_keyboard$package$.prototype = $p;
$p.lE = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.h(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.h(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  fa: 1
}));
var $n_Ltrivalibs_utils_events_keyboard$package$;
function $m_Ltrivalibs_utils_events_keyboard$package$() {
  if ((!$n_Ltrivalibs_utils_events_keyboard$package$)) {
    $n_Ltrivalibs_utils_events_keyboard$package$ = new $c_Ltrivalibs_utils_events_keyboard$package$();
  }
  return $n_Ltrivalibs_utils_events_keyboard$package$;
}
function $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V($thiz, holdTimer$1) {
  if ((holdTimer$1.eV !== null)) {
    $m_sjs_js_timers_package$().kZ(holdTimer$1.eV);
    holdTimer$1.eV = null;
  }
}
function $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V($thiz, tracker$1, primaryActive$1, onDragEnd$1, holdTimer$2) {
  var wasDragging = tracker$1.fZ;
  tracker$1.mV();
  $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V($thiz, holdTimer$2);
  primaryActive$1.en = false;
  if (wasDragging) {
    onDragEnd$1.fi();
  }
}
/** @constructor */
function $c_Ltrivalibs_utils_events_pointer$package$() {
}
$p = $c_Ltrivalibs_utils_events_pointer$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_pointer$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_pointer$package$() {
}
$h_Ltrivalibs_utils_events_pointer$package$.prototype = $p;
$p.mr = (function(el, moveTarget, onDown, onUp, onMove, onDragStart, onDrag, onDragEnd, onHold, holdDelay, holdRadius, suppressContextMenu) {
  var tracker = new $c_Ltrivalibs_utils_events_PointerTracker(holdRadius);
  var holdTimer = new $c_sr_ObjectRef(null);
  var lastX = new $c_sr_DoubleRef(0.0);
  var lastY = new $c_sr_DoubleRef(0.0);
  var primaryActive = new $c_sr_BooleanRef(false);
  var downFn = ((e$3) => {
    var btn = (e$3.button | 0);
    onDown.jM(btn, (+e$3.clientX), (+e$3.clientY));
    if (((!(!e$3.isPrimary)) && (btn === 0))) {
      lastX.af = (+e$3.clientX);
      lastY.af = (+e$3.clientY);
      primaryActive.en = true;
      tracker.lb((+e$3.clientX), (+e$3.clientY));
      onDragStart.fi();
      $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V(this, holdTimer);
      holdTimer.eV = $m_sjs_js_timers_package$().mI(holdDelay, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
        if (tracker.kY()) {
          onHold.gT(lastX.af, lastY.af);
        }
      })));
    }
  });
  var moveFn = ((e$3$1) => {
    var dx = ((+e$3$1.clientX) - lastX.af);
    var dy = ((+e$3$1.clientY) - lastY.af);
    lastX.af = (+e$3$1.clientX);
    lastY.af = (+e$3$1.clientY);
    onMove.kQ((+e$3$1.clientX), (+e$3$1.clientY), dx, dy);
    if (primaryActive.en) {
      tracker.mk((+e$3$1.clientX), (+e$3$1.clientY));
      if (tracker.fZ) {
        onDrag.gT(dx, dy);
      }
    }
  });
  var upFn = ((e$3$2) => {
    var btn$1 = (e$3$2.button | 0);
    onUp.jM(btn$1, (+e$3$2.clientX), (+e$3$2.clientY));
    if ((primaryActive.en && (btn$1 === 0))) {
      $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V(this, tracker, primaryActive, onDragEnd, holdTimer);
    }
  });
  var cancelFn = ((e$3$3) => {
    if (primaryActive.en) {
      $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V(this, tracker, primaryActive, onDragEnd, holdTimer);
    }
  });
  var ctxFn = ((e$3$4) => {
    e$3$4.preventDefault();
  });
  el.addEventListener("pointerdown", downFn);
  moveTarget.addEventListener("pointermove", moveFn);
  moveTarget.addEventListener("pointerup", upFn);
  moveTarget.addEventListener("pointercancel", cancelFn);
  if (suppressContextMenu) {
    el.addEventListener("contextmenu", ctxFn);
  }
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V(this, holdTimer);
    el.removeEventListener("pointerdown", downFn);
    moveTarget.removeEventListener("pointermove", moveFn);
    moveTarget.removeEventListener("pointerup", upFn);
    moveTarget.removeEventListener("pointercancel", cancelFn);
    if (suppressContextMenu) {
      el.removeEventListener("contextmenu", ctxFn);
    }
  }));
});
$p.ms = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  fb: 1
}));
var $n_Ltrivalibs_utils_events_pointer$package$;
function $m_Ltrivalibs_utils_events_pointer$package$() {
  if ((!$n_Ltrivalibs_utils_events_pointer$package$)) {
    $n_Ltrivalibs_utils_events_pointer$package$ = new $c_Ltrivalibs_utils_events_pointer$package$();
  }
  return $n_Ltrivalibs_utils_events_pointer$package$;
}
/** @constructor */
function $c_jl_Character$() {
  this.ha = null;
  $n_jl_Character$ = this;
  this.ha = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.mS = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.l6 = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().kV(this.ha, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.ha.c[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  aY: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.gn = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.lC = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().gn(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().gn(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().gn(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.l6(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().gn(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().gn(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  b4: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.m)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.io = s;
  if (writableStackTrace) {
    $thiz.li();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.io = null;
  }
  gX() {
    return this.io;
  }
  li() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.eo : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  i() {
    var className = $objectClassName(this);
    var message = this.gX();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  l() {
    return $c_O.prototype.l.call(this);
  }
  j(that) {
    return $c_O.prototype.j.call(this, that);
  }
  get "message"() {
    var m = this.gX();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.i();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_s_Console$() {
  this.iq = null;
  $n_s_Console$ = this;
  this.iq = new $c_s_util_DynamicVariable($m_jl_System$Streams$().il);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.mp = (function() {
  return this.iq.hd;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  bn: 1,
  cv: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_s_Conversion() {
}
$p = $c_s_Conversion.prototype = new $h_O();
$p.constructor = $c_s_Conversion;
/** @constructor */
function $h_s_Conversion() {
}
$h_s_Conversion.prototype = $p;
$p.i = (function() {
  return "<function1>";
});
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
$p.n2 = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.c.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.iB;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.i = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.i = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.i = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.i = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_AbstractFunction4() {
}
$p = $c_sr_AbstractFunction4.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
}
$h_sr_AbstractFunction4.prototype = $p;
$p.i = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.en = false;
  this.en = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.i = (function() {
  return ("" + this.en);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  cO: 1,
  a: 1
}));
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.af = 0.0;
  this.af = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.i = (function() {
  return ("" + this.af);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  cQ: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.eV = null;
  this.eV = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.i = (function() {
  return ("" + this.eV);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  cS: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.eX = 0;
  this.iK = 0;
  this.kB = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.eX = $f_T__hashCode__I("Seq");
  this.iK = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.kB = this.mU($m_sci_Nil$(), this.iK);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.kq = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.lw(xs, this.eX) : ((xs instanceof $c_sci_List) ? this.lG(xs, this.eX) : this.mo(xs, this.eX)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  df: 1,
  de: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.gw = null;
  this.gw = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dl: 1,
  dk: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = $p;
$p.h7 = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().lr(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dm: 1,
  aI: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$.prototype = $p;
$p.n3 = (function(ref, value) {
  var value$proxy2 = value.n;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.m;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.o;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.h7 = (function(ref, value) {
  this.n3(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  dn: 1,
  aI: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$.prototype = $p;
$p.fp = (function(t) {
  return new $c_T2(t.hx, t.hy);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dt: 1,
  aJ: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$.prototype = $p;
$p.fp = (function(t) {
  return new $c_T3(t.n, t.m, t.o);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  du: 1,
  aJ: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayout$named(x$1) {
  this.iN = null;
  this.iN = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dA: 1,
  dz: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.iO = null;
  this.iP = null;
  this.iO = x$1;
  this.iP = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.mX = (function(t) {
  return $m_sr_Tuples$().l1(this.iO.fp(t.k(0)), this.iP.fp($m_sr_Tuples$().mP(t)));
});
$p.fp = (function(t) {
  return this.mX(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  dB: 1,
  aK: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$.prototype = $p;
$p.fp = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  dC: 1,
  aK: 1
}));
var $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
function $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
  if ((!$n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$)) {
    $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$();
  }
  return $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(idx$2) {
  this.iR = 0;
  this.iR = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.km = (function(t) {
  return t.k(this.iR);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  dH: 1,
  dx: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.n * other.n) + (v.m * other.m)) + (v.o * other.o));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.iS = null;
  this.iT = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.i8 = (function() {
  if ((!this.iT)) {
    this.iS = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.iT = true;
  }
  return this.iS;
});
$p.lo = (function(t, r, s) {
  var x = r.a8;
  var y = r.ag;
  var z = r.ah;
  var w = r.a7;
  var x2 = (x + x);
  var y2 = (y + y);
  var z2 = (z + z);
  var xx = (x * x2);
  var xy = (x * y2);
  var xz = (x * z2);
  var yy = (y * y2);
  var yz = (y * z2);
  var zz = (z * z2);
  var wx = (w * x2);
  var wy = (w * y2);
  var wz = (w * z2);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.n), ((xy + wz) * s.n), ((xz - wy) * s.n), 0.0, ((xy - wz) * s.m), ((1.0 - (xx + zz)) * s.m), ((yz + wx) * s.m), 0.0, ((xz + wy) * s.o), ((yz - wx) * s.o), ((1.0 - (xx + yy)) * s.o), 0.0, t.n, t.m, t.o, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  dV: 1,
  dJ: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat4$;
function $m_Ltrivalibs_graphics_math_cpu_Mat4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat4$ = new $c_Ltrivalibs_graphics_math_cpu_Mat4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_QuatImmutableOps_Quat$", ({
  dZ: 1,
  e1: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$() {
  this.iU = null;
  this.iV = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.B = (function() {
  if ((!this.iV)) {
    this.iU = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.iV = true;
  }
  return this.iU;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  e4: 1,
  dO: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$$anon$18", ({
  e7: 1,
  dL: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(f$2) {
  this.iY = null;
  this.iY = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = $p;
$p.ii = (function(s) {
  return this.iY.h(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1, "trivalibs.graphics.math.gpu.LeftScalar$$anon$1", ({
  eb: 1,
  e9: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.d = null;
  this.iZ = null;
  this.iZ = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.ab = (function(value) {
  return (((("  let " + this.iZ) + " = ") + value.d) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  ec: 1,
  aP: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4.prototype = $p;
$p.h8 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.kx = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4, "trivalibs.graphics.math.gpu.float_expr$package$$anon$4", ({
  ei: 1,
  dM: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5.prototype = $p;
$p.lF = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("length(" + v.d) + ")"));
});
$p.k1 = (function(v) {
  return this.lF(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5, "trivalibs.graphics.math.gpu.float_expr$package$$anon$5", ({
  ej: 1,
  aN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6.prototype = $p;
$p.h8 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.n0 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".w"));
});
$p.ij = (function(v) {
  return this.h8(v);
});
$p.kv = (function(v) {
  return this.n0(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  ek: 1,
  aO: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9, "trivalibs.graphics.math.gpu.float_expr$package$$anon$9", ({
  el: 1,
  T: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = $p;
$p.ku = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.d) + " * ") + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  em: 1,
  dK: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = $p;
$p.lH = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("log2(" + a.d) + ")"));
});
$p.mh = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.d) + ", ") + other.d) + ")"));
});
$p.jR = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.d) + ")"));
});
$p.jV = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.d) + " * 2.0 - 1.0)"));
});
$p.lk = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.d) + " * 0.5 + 0.5)"));
});
$p.mL = (function(a, edge0, edge1) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.d) + ", ") + edge1.d) + ", ") + a.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  en: 1,
  fc: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$.prototype = $p;
$p.jK = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " + ") + b.d) + ")"));
});
$p.kI = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " - ") + b.d) + ")"));
});
$p.kK = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " * ") + b.d) + ")"));
});
$p.kG = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " / ") + b.d) + ")"));
});
$p.kJ = (function(a, b) {
  return this.jK(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(b));
});
$p.jJ = (function(a, b) {
  return this.kI(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(b));
});
$p.g2 = (function(a, b) {
  return this.kK(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(b));
});
$p.kF = (function(a, b) {
  return this.kG(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(b));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  eo: 1,
  fd: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$.prototype = $p;
$p.mO = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " - ") + other.d) + ")"));
});
$p.ml = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + scalar.d) + ")"));
});
$p.jL = (function(v, x$2, scalar) {
  return this.ml(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().z().h(scalar));
});
$p.l7 = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " / ") + scalar.d) + ")"));
});
$p.mi = (function(v, x$2, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.d) + ", ") + b.d) + ", ") + t.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  ep: 1,
  dP: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  eq: 1,
  dS: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.A = null;
  this.hC = null;
  this.gC = 0;
  this.fA = 0;
  this.C = null;
  this.R = null;
  this.hD = null;
  this.A = shade;
  this.hC = null;
  this.gC = (-1);
  this.fA = (-1);
  this.C = [];
  this.R = [];
  this.hD = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.mG = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.hC = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.gC = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.fA = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  ex: 1,
  aQ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.aa = null;
  this.P = null;
  this.hH = null;
  this.hG = null;
  this.ew = null;
  this.D = null;
  this.hI = null;
  this.aa = form;
  this.P = shade;
  this.hH = "none";
  this.hG = null;
  this.ew = [];
  this.D = [];
  this.hI = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.mH = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.hH = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.hG = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  eC: 1,
  aQ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.aG = null;
  this.aG = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.Z = (function() {
  return this.aG.Z();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  eI: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.hL = null;
  this.hL = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.Z = (function() {
  return this.hL.Z();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  eJ: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.hR = null;
  this.hR = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.aH = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.hR === "") ? name : ((this.hR + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  eR: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.hS = null;
  this.hS = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.Q = (function(name) {
  return ((this.hS === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.hS + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  eS: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(kinds) {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor, "trivalibs.graphics.shader.dsl.TypedLocalAccessor", ({
  eT: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor, "trivalibs.graphics.shader.dsl.TypedPanelAccessor", ({
  eU: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.jz = null;
  this.hT = null;
  this.jz = prefix;
  this.hT = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.aH = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.jz + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  eW: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = $p;
$p.Z = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  f2: 1,
  D: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = $p;
$p.Z = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  f3: 1,
  D: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$.prototype = $p;
$p.Z = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  f4: 1,
  D: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.h9 = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.i = (function() {
  return ((this.h9.Y ? "interface " : (this.h9.X ? "" : "class ")) + this.h9.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  aZ: 1,
  a: 1,
  g: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_s_Predef$() {
  $n_s_Predef$ = this;
  $m_sci_List$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  bv: 1,
  bs: 1,
  bt: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product1__productElement__I__O($thiz, n) {
  if ((n === 0)) {
    return $thiz.eC;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eD;
      break;
    }
    case 1: {
      return $thiz.aJ;
      break;
    }
    case 2: {
      return $thiz.aK;
      break;
    }
    case 3: {
      return $thiz.aL;
      break;
    }
    case 4: {
      return $thiz.aM;
      break;
    }
    case 5: {
      return $thiz.aN;
      break;
    }
    case 6: {
      return $thiz.aO;
      break;
    }
    case 7: {
      return $thiz.aP;
      break;
    }
    case 8: {
      return $thiz.aQ;
      break;
    }
    case 9: {
      return $thiz.aI;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 9)"));
    }
  }
}
function $f_s_Product11__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eE;
      break;
    }
    case 1: {
      return $thiz.aT;
      break;
    }
    case 2: {
      return $thiz.aU;
      break;
    }
    case 3: {
      return $thiz.aV;
      break;
    }
    case 4: {
      return $thiz.aW;
      break;
    }
    case 5: {
      return $thiz.aX;
      break;
    }
    case 6: {
      return $thiz.aY;
      break;
    }
    case 7: {
      return $thiz.aZ;
      break;
    }
    case 8: {
      return $thiz.b0;
      break;
    }
    case 9: {
      return $thiz.aR;
      break;
    }
    case 10: {
      return $thiz.aS;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 10)"));
    }
  }
}
function $f_s_Product12__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eF;
      break;
    }
    case 1: {
      return $thiz.b4;
      break;
    }
    case 2: {
      return $thiz.b5;
      break;
    }
    case 3: {
      return $thiz.b6;
      break;
    }
    case 4: {
      return $thiz.b7;
      break;
    }
    case 5: {
      return $thiz.b8;
      break;
    }
    case 6: {
      return $thiz.b9;
      break;
    }
    case 7: {
      return $thiz.ba;
      break;
    }
    case 8: {
      return $thiz.bb;
      break;
    }
    case 9: {
      return $thiz.b1;
      break;
    }
    case 10: {
      return $thiz.b2;
      break;
    }
    case 11: {
      return $thiz.b3;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 11)"));
    }
  }
}
function $f_s_Product13__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eG;
      break;
    }
    case 1: {
      return $thiz.bg;
      break;
    }
    case 2: {
      return $thiz.bh;
      break;
    }
    case 3: {
      return $thiz.bi;
      break;
    }
    case 4: {
      return $thiz.bj;
      break;
    }
    case 5: {
      return $thiz.bk;
      break;
    }
    case 6: {
      return $thiz.bl;
      break;
    }
    case 7: {
      return $thiz.bm;
      break;
    }
    case 8: {
      return $thiz.bn;
      break;
    }
    case 9: {
      return $thiz.bc;
      break;
    }
    case 10: {
      return $thiz.bd;
      break;
    }
    case 11: {
      return $thiz.be;
      break;
    }
    case 12: {
      return $thiz.bf;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 12)"));
    }
  }
}
function $f_s_Product14__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eH;
      break;
    }
    case 1: {
      return $thiz.bt;
      break;
    }
    case 2: {
      return $thiz.bu;
      break;
    }
    case 3: {
      return $thiz.bv;
      break;
    }
    case 4: {
      return $thiz.bw;
      break;
    }
    case 5: {
      return $thiz.bx;
      break;
    }
    case 6: {
      return $thiz.by;
      break;
    }
    case 7: {
      return $thiz.bz;
      break;
    }
    case 8: {
      return $thiz.bA;
      break;
    }
    case 9: {
      return $thiz.bo;
      break;
    }
    case 10: {
      return $thiz.bp;
      break;
    }
    case 11: {
      return $thiz.bq;
      break;
    }
    case 12: {
      return $thiz.br;
      break;
    }
    case 13: {
      return $thiz.bs;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 13)"));
    }
  }
}
function $f_s_Product15__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eI;
      break;
    }
    case 1: {
      return $thiz.bH;
      break;
    }
    case 2: {
      return $thiz.bI;
      break;
    }
    case 3: {
      return $thiz.bJ;
      break;
    }
    case 4: {
      return $thiz.bK;
      break;
    }
    case 5: {
      return $thiz.bL;
      break;
    }
    case 6: {
      return $thiz.bM;
      break;
    }
    case 7: {
      return $thiz.bN;
      break;
    }
    case 8: {
      return $thiz.bO;
      break;
    }
    case 9: {
      return $thiz.bB;
      break;
    }
    case 10: {
      return $thiz.bC;
      break;
    }
    case 11: {
      return $thiz.bD;
      break;
    }
    case 12: {
      return $thiz.bE;
      break;
    }
    case 13: {
      return $thiz.bF;
      break;
    }
    case 14: {
      return $thiz.bG;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 14)"));
    }
  }
}
function $f_s_Product16__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eJ;
      break;
    }
    case 1: {
      return $thiz.bW;
      break;
    }
    case 2: {
      return $thiz.bX;
      break;
    }
    case 3: {
      return $thiz.bY;
      break;
    }
    case 4: {
      return $thiz.bZ;
      break;
    }
    case 5: {
      return $thiz.c0;
      break;
    }
    case 6: {
      return $thiz.c1;
      break;
    }
    case 7: {
      return $thiz.c2;
      break;
    }
    case 8: {
      return $thiz.c3;
      break;
    }
    case 9: {
      return $thiz.bP;
      break;
    }
    case 10: {
      return $thiz.bQ;
      break;
    }
    case 11: {
      return $thiz.bR;
      break;
    }
    case 12: {
      return $thiz.bS;
      break;
    }
    case 13: {
      return $thiz.bT;
      break;
    }
    case 14: {
      return $thiz.bU;
      break;
    }
    case 15: {
      return $thiz.bV;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 15)"));
    }
  }
}
function $f_s_Product17__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eK;
      break;
    }
    case 1: {
      return $thiz.cc;
      break;
    }
    case 2: {
      return $thiz.cd;
      break;
    }
    case 3: {
      return $thiz.ce;
      break;
    }
    case 4: {
      return $thiz.cf;
      break;
    }
    case 5: {
      return $thiz.cg;
      break;
    }
    case 6: {
      return $thiz.ch;
      break;
    }
    case 7: {
      return $thiz.ci;
      break;
    }
    case 8: {
      return $thiz.cj;
      break;
    }
    case 9: {
      return $thiz.c4;
      break;
    }
    case 10: {
      return $thiz.c5;
      break;
    }
    case 11: {
      return $thiz.c6;
      break;
    }
    case 12: {
      return $thiz.c7;
      break;
    }
    case 13: {
      return $thiz.c8;
      break;
    }
    case 14: {
      return $thiz.c9;
      break;
    }
    case 15: {
      return $thiz.ca;
      break;
    }
    case 16: {
      return $thiz.cb;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 16)"));
    }
  }
}
function $f_s_Product18__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eL;
      break;
    }
    case 1: {
      return $thiz.ct;
      break;
    }
    case 2: {
      return $thiz.cu;
      break;
    }
    case 3: {
      return $thiz.cv;
      break;
    }
    case 4: {
      return $thiz.cw;
      break;
    }
    case 5: {
      return $thiz.cx;
      break;
    }
    case 6: {
      return $thiz.cy;
      break;
    }
    case 7: {
      return $thiz.cz;
      break;
    }
    case 8: {
      return $thiz.cA;
      break;
    }
    case 9: {
      return $thiz.ck;
      break;
    }
    case 10: {
      return $thiz.cl;
      break;
    }
    case 11: {
      return $thiz.cm;
      break;
    }
    case 12: {
      return $thiz.cn;
      break;
    }
    case 13: {
      return $thiz.co;
      break;
    }
    case 14: {
      return $thiz.cp;
      break;
    }
    case 15: {
      return $thiz.cq;
      break;
    }
    case 16: {
      return $thiz.cr;
      break;
    }
    case 17: {
      return $thiz.cs;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 17)"));
    }
  }
}
function $f_s_Product19__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eM;
      break;
    }
    case 1: {
      return $thiz.cL;
      break;
    }
    case 2: {
      return $thiz.cM;
      break;
    }
    case 3: {
      return $thiz.cN;
      break;
    }
    case 4: {
      return $thiz.cO;
      break;
    }
    case 5: {
      return $thiz.cP;
      break;
    }
    case 6: {
      return $thiz.cQ;
      break;
    }
    case 7: {
      return $thiz.cR;
      break;
    }
    case 8: {
      return $thiz.cS;
      break;
    }
    case 9: {
      return $thiz.cB;
      break;
    }
    case 10: {
      return $thiz.cC;
      break;
    }
    case 11: {
      return $thiz.cD;
      break;
    }
    case 12: {
      return $thiz.cE;
      break;
    }
    case 13: {
      return $thiz.cF;
      break;
    }
    case 14: {
      return $thiz.cG;
      break;
    }
    case 15: {
      return $thiz.cH;
      break;
    }
    case 16: {
      return $thiz.cI;
      break;
    }
    case 17: {
      return $thiz.cJ;
      break;
    }
    case 18: {
      return $thiz.cK;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 18)"));
    }
  }
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.M;
      break;
    }
    case 1: {
      return $thiz.U;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product20__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eN;
      break;
    }
    case 1: {
      return $thiz.d3;
      break;
    }
    case 2: {
      return $thiz.d5;
      break;
    }
    case 3: {
      return $thiz.d6;
      break;
    }
    case 4: {
      return $thiz.d7;
      break;
    }
    case 5: {
      return $thiz.d8;
      break;
    }
    case 6: {
      return $thiz.d9;
      break;
    }
    case 7: {
      return $thiz.da;
      break;
    }
    case 8: {
      return $thiz.db;
      break;
    }
    case 9: {
      return $thiz.cT;
      break;
    }
    case 10: {
      return $thiz.cU;
      break;
    }
    case 11: {
      return $thiz.cV;
      break;
    }
    case 12: {
      return $thiz.cW;
      break;
    }
    case 13: {
      return $thiz.cX;
      break;
    }
    case 14: {
      return $thiz.cY;
      break;
    }
    case 15: {
      return $thiz.cZ;
      break;
    }
    case 16: {
      return $thiz.d0;
      break;
    }
    case 17: {
      return $thiz.d1;
      break;
    }
    case 18: {
      return $thiz.d2;
      break;
    }
    case 19: {
      return $thiz.d4;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 19)"));
    }
  }
}
function $f_s_Product21__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eO;
      break;
    }
    case 1: {
      return $thiz.dm;
      break;
    }
    case 2: {
      return $thiz.dq;
      break;
    }
    case 3: {
      return $thiz.dr;
      break;
    }
    case 4: {
      return $thiz.ds;
      break;
    }
    case 5: {
      return $thiz.dt;
      break;
    }
    case 6: {
      return $thiz.du;
      break;
    }
    case 7: {
      return $thiz.dv;
      break;
    }
    case 8: {
      return $thiz.dw;
      break;
    }
    case 9: {
      return $thiz.dc;
      break;
    }
    case 10: {
      return $thiz.dd;
      break;
    }
    case 11: {
      return $thiz.de;
      break;
    }
    case 12: {
      return $thiz.df;
      break;
    }
    case 13: {
      return $thiz.dg;
      break;
    }
    case 14: {
      return $thiz.dh;
      break;
    }
    case 15: {
      return $thiz.di;
      break;
    }
    case 16: {
      return $thiz.dj;
      break;
    }
    case 17: {
      return $thiz.dk;
      break;
    }
    case 18: {
      return $thiz.dl;
      break;
    }
    case 19: {
      return $thiz.dn;
      break;
    }
    case 20: {
      return $thiz.dp;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 20)"));
    }
  }
}
function $f_s_Product22__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eP;
      break;
    }
    case 1: {
      return $thiz.dH;
      break;
    }
    case 2: {
      return $thiz.dL;
      break;
    }
    case 3: {
      return $thiz.dM;
      break;
    }
    case 4: {
      return $thiz.dN;
      break;
    }
    case 5: {
      return $thiz.dO;
      break;
    }
    case 6: {
      return $thiz.dP;
      break;
    }
    case 7: {
      return $thiz.dQ;
      break;
    }
    case 8: {
      return $thiz.dR;
      break;
    }
    case 9: {
      return $thiz.dx;
      break;
    }
    case 10: {
      return $thiz.dy;
      break;
    }
    case 11: {
      return $thiz.dz;
      break;
    }
    case 12: {
      return $thiz.dA;
      break;
    }
    case 13: {
      return $thiz.dB;
      break;
    }
    case 14: {
      return $thiz.dC;
      break;
    }
    case 15: {
      return $thiz.dD;
      break;
    }
    case 16: {
      return $thiz.dE;
      break;
    }
    case 17: {
      return $thiz.dF;
      break;
    }
    case 18: {
      return $thiz.dG;
      break;
    }
    case 19: {
      return $thiz.dI;
      break;
    }
    case 20: {
      return $thiz.dJ;
      break;
    }
    case 21: {
      return $thiz.dK;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 21)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ay;
      break;
    }
    case 1: {
      return $thiz.ak;
      break;
    }
    case 2: {
      return $thiz.al;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $f_s_Product4__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.dS;
      break;
    }
    case 1: {
      return $thiz.az;
      break;
    }
    case 2: {
      return $thiz.aA;
      break;
    }
    case 3: {
      return $thiz.aB;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 3)"));
    }
  }
}
function $f_s_Product5__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eQ;
      break;
    }
    case 1: {
      return $thiz.dT;
      break;
    }
    case 2: {
      return $thiz.dU;
      break;
    }
    case 3: {
      return $thiz.dV;
      break;
    }
    case 4: {
      return $thiz.dW;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 4)"));
    }
  }
}
function $f_s_Product6__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eR;
      break;
    }
    case 1: {
      return $thiz.dX;
      break;
    }
    case 2: {
      return $thiz.dY;
      break;
    }
    case 3: {
      return $thiz.dZ;
      break;
    }
    case 4: {
      return $thiz.e0;
      break;
    }
    case 5: {
      return $thiz.e1;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 5)"));
    }
  }
}
function $f_s_Product7__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eS;
      break;
    }
    case 1: {
      return $thiz.e2;
      break;
    }
    case 2: {
      return $thiz.e3;
      break;
    }
    case 3: {
      return $thiz.e4;
      break;
    }
    case 4: {
      return $thiz.e5;
      break;
    }
    case 5: {
      return $thiz.e6;
      break;
    }
    case 6: {
      return $thiz.e7;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 6)"));
    }
  }
}
function $f_s_Product8__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eT;
      break;
    }
    case 1: {
      return $thiz.e8;
      break;
    }
    case 2: {
      return $thiz.e9;
      break;
    }
    case 3: {
      return $thiz.ea;
      break;
    }
    case 4: {
      return $thiz.eb;
      break;
    }
    case 5: {
      return $thiz.ec;
      break;
    }
    case 6: {
      return $thiz.ed;
      break;
    }
    case 7: {
      return $thiz.ee;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 7)"));
    }
  }
}
function $f_s_Product9__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eU;
      break;
    }
    case 1: {
      return $thiz.ef;
      break;
    }
    case 2: {
      return $thiz.eg;
      break;
    }
    case 3: {
      return $thiz.eh;
      break;
    }
    case 4: {
      return $thiz.ei;
      break;
    }
    case 5: {
      return $thiz.ej;
      break;
    }
    case 6: {
      return $thiz.ek;
      break;
    }
    case 7: {
      return $thiz.el;
      break;
    }
    case 8: {
      return $thiz.em;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).l0(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().an : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.K();
  while ($thiz.v()) {
    if ((!those.v())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().a($thiz.s(), those.s()))) {
      return false;
    }
  }
  return (!those.v());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.an = null;
  $n_sc_Iterator$ = this;
  this.an = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  c1: 1,
  a: 1,
  as: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cw)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.iC = null;
  this.iC = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.fi = (function() {
  return (0, this.iC)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cF: 1,
  cE: 1,
  bo: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.iD = null;
  this.iD = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.h = (function(x0) {
  return (0, this.iD)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cH: 1,
  cG: 1,
  h: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.iE = null;
  this.iE = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.gT = (function(x0, x1) {
  return (0, this.iE)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cJ: 1,
  cI: 1,
  bp: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.iF = null;
  this.iF = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.jM = (function(x0, x1, x2) {
  return (0, this.iF)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cL: 1,
  cK: 1,
  bq: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.iG = null;
  this.iG = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.kQ = (function(x0, x1, x2, x3) {
  return (0, this.iG)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cN: 1,
  cM: 1,
  br: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cR: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.N = null;
  this.N = es;
  if ((es.c.length <= 22)) {
    $m_sr_Scala3RunTime$().kU();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function(n) {
  return this.N.c[n];
});
$p.p = (function() {
  return this.N.c.length;
});
$p.r = (function() {
  return "Tuple";
});
$p.i = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().n2(this.N), "(", ",", ")");
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().kX(this, (-889275714), null);
});
$p.j = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.N === that.N)) {
      return true;
    } else {
      if ((this.N.c.length !== that.N.c.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.N.c.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.N;
        var n = i;
        var $x_1 = arr$3.c[n];
        var arr$4 = that.N;
        var n$1 = i;
        if ((!$x_2.a($x_1, arr$4.c[n$1]))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    }
  } else {
    return false;
  }
});
function $isArrayOf_sr_TupleXXL(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aE: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.g5 = (function(f) {
  return ((arg1$2) => f.h(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  cZ: 1,
  d3: 1,
  d4: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
var $b_Ltrivalibs_bufferdata_BufferView;
function $a_Ltrivalibs_bufferdata_BufferView() {
  if ((!$b_Ltrivalibs_bufferdata_BufferView)) {
    $b_Ltrivalibs_bufferdata_BufferView = class $b_Ltrivalibs_bufferdata_BufferView extends Object {
      constructor(arg, arg$2) {
        var dv = null;
        var off = 0;
        dv = arg;
        off = (arg$2 | 0);
        super();
        Object.defineProperty(this, "dv", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "off", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        this.dv = dv;
        this.off = off;
      }
    };
  }
  return $b_Ltrivalibs_bufferdata_BufferView;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2.prototype = $p;
$p.h = (function(x) {
  return x;
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2, "trivalibs.graphics.math.gpu.expr$package$$anon$2", ({
  ee: 1,
  G: 1,
  h: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = $p;
$p.h = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().i5((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  eg: 1,
  G: 1,
  h: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3.prototype = $p;
$p.h = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("f32(" + (x | 0)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3, "trivalibs.graphics.math.gpu.float_expr$package$$anon$3", ({
  eh: 1,
  G: 1,
  h: 1
}));
var $b_Ltrivalibs_graphics_painter_PanelBinding;
function $a_Ltrivalibs_graphics_painter_PanelBinding() {
  if ((!$b_Ltrivalibs_graphics_painter_PanelBinding)) {
    $b_Ltrivalibs_graphics_painter_PanelBinding = class $b_Ltrivalibs_graphics_painter_PanelBinding extends Object {
      constructor(arg, ...rest) {
        var panel = null;
        var index = 0;
        var mipLevel = 0;
        var depth = false;
        panel = arg;
        index = ((rest[0] === (void 0)) ? 0 : (rest[0] | 0));
        mipLevel = ((rest[1] === (void 0)) ? (-1) : (rest[1] | 0));
        depth = ((rest[2] !== (void 0)) && (!(!rest[2])));
        super();
        Object.defineProperty(this, "panel", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "index", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        Object.defineProperty(this, "mipLevel", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        Object.defineProperty(this, "depth", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": false
        }));
        this.panel = panel;
        this.index = index;
        this.mipLevel = mipLevel;
        this.depth = depth;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_PanelBinding;
}
var $b_Ltrivalibs_graphics_shader_dsl_WgslFnData;
function $a_Ltrivalibs_graphics_shader_dsl_WgslFnData() {
  if ((!$b_Ltrivalibs_graphics_shader_dsl_WgslFnData)) {
    $b_Ltrivalibs_graphics_shader_dsl_WgslFnData = class $b_Ltrivalibs_graphics_shader_dsl_WgslFnData extends Object {
      constructor(arg, arg$2, ...rest) {
        var name = null;
        var src = null;
        var deps = null;
        name = arg;
        src = arg$2;
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().kH() : rest[0]);
        super();
        Object.defineProperty(this, "name", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "src", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "deps", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.name = name;
        this.src = src;
        this.deps = deps;
      }
    };
  }
  return $b_Ltrivalibs_graphics_shader_dsl_WgslFnData;
}
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  aV: 1,
  b0: 1,
  f: 1,
  a: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  aW: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Z)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  Z: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.L = null;
  this.L = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.i = (function() {
  return this.L;
});
$p.u = (function() {
  return this.L.length;
});
$p.jQ = (function(index) {
  return this.L.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bc: 1,
  F: 1,
  X: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.S = (function() {
  return (-1);
});
$p.i0 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.K = (function() {
  return this;
});
$p.gV = (function(n) {
  return this.h6(n, (-1));
});
$p.h6 = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.i = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.ez(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.S();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.S();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.K(), that);
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dc)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = $p;
$p.g7 = (function(m) {
  return m.hh;
});
$p.g8 = (function(m) {
  return m.hi;
});
$p.g9 = (function(m) {
  return m.hj;
});
$p.ga = (function(m) {
  return m.hk;
});
$p.gb = (function(m) {
  return m.hl;
});
$p.gc = (function(m) {
  return m.hm;
});
$p.gd = (function(m) {
  return m.hn;
});
$p.ge = (function(m) {
  return m.ho;
});
$p.gf = (function(m) {
  return m.hp;
});
$p.gg = (function(m) {
  return m.hq;
});
$p.gh = (function(m) {
  return m.hr;
});
$p.gi = (function(m) {
  return m.hs;
});
$p.gj = (function(m) {
  return m.ht;
});
$p.gk = (function(m) {
  return m.hu;
});
$p.gl = (function(m) {
  return m.hv;
});
$p.gm = (function(m) {
  return m.hw;
});
$p.k2 = (function(m, v) {
  m.hh = v;
});
$p.k3 = (function(m, v) {
  m.hi = v;
});
$p.k4 = (function(m, v) {
  m.hj = v;
});
$p.k5 = (function(m, v) {
  m.hk = v;
});
$p.k6 = (function(m, v) {
  m.hl = v;
});
$p.k7 = (function(m, v) {
  m.hm = v;
});
$p.k8 = (function(m, v) {
  m.hn = v;
});
$p.k9 = (function(m, v) {
  m.ho = v;
});
$p.ka = (function(m, v) {
  m.hp = v;
});
$p.kb = (function(m, v) {
  m.hq = v;
});
$p.kc = (function(m, v) {
  m.hr = v;
});
$p.kd = (function(m, v) {
  m.hs = v;
});
$p.ke = (function(m, v) {
  m.ht = v;
});
$p.kf = (function(m, v) {
  m.hu = v;
});
$p.kg = (function(m, v) {
  m.hv = v;
});
$p.kh = (function(m, v) {
  m.hw = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  dW: 1,
  T: 1,
  aL: 1,
  aM: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
function $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$.prototype = $p;
$p.ij = (function(v) {
  return v.a8;
});
$p.kv = (function(v) {
  return v.a7;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  e0: 1,
  aO: 1,
  dR: 1,
  dT: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$.prototype = $p;
$p.k1 = (function(v) {
  return $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(this, v);
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$, "trivalibs.graphics.math.cpu.Vec3$given_Vec3Mutable_Vec3$", ({
  e5: 1,
  aN: 1,
  dN: 1,
  dQ: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$.prototype = $p;
$p.lJ = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.lL = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.lN = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.lP = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.lR = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.lT = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.lV = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.lX = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.lZ = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.m1 = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.m3 = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.m5 = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.m7 = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.m9 = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.mb = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.md = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.lK = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.lM = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.lO = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.lQ = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.lS = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.lU = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.lW = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.lY = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.m0 = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.m2 = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.m4 = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.m6 = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.m8 = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.ma = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.mc = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.me = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.g7 = (function(m) {
  return this.lJ(m);
});
$p.g8 = (function(m) {
  return this.lL(m);
});
$p.g9 = (function(m) {
  return this.lN(m);
});
$p.ga = (function(m) {
  return this.lP(m);
});
$p.gb = (function(m) {
  return this.lR(m);
});
$p.gc = (function(m) {
  return this.lT(m);
});
$p.gd = (function(m) {
  return this.lV(m);
});
$p.ge = (function(m) {
  return this.lX(m);
});
$p.gf = (function(m) {
  return this.lZ(m);
});
$p.gg = (function(m) {
  return this.m1(m);
});
$p.gh = (function(m) {
  return this.m3(m);
});
$p.gi = (function(m) {
  return this.m5(m);
});
$p.gj = (function(m) {
  return this.m7(m);
});
$p.gk = (function(m) {
  return this.m9(m);
});
$p.gl = (function(m) {
  return this.mb(m);
});
$p.gm = (function(m) {
  return this.md(m);
});
$p.k2 = (function(m, v) {
  this.lK(m, v);
});
$p.k3 = (function(m, v) {
  this.lM(m, v);
});
$p.k4 = (function(m, v) {
  this.lO(m, v);
});
$p.k5 = (function(m, v) {
  this.lQ(m, v);
});
$p.k6 = (function(m, v) {
  this.lS(m, v);
});
$p.k7 = (function(m, v) {
  this.lU(m, v);
});
$p.k8 = (function(m, v) {
  this.lW(m, v);
});
$p.k9 = (function(m, v) {
  this.lY(m, v);
});
$p.ka = (function(m, v) {
  this.m0(m, v);
});
$p.kb = (function(m, v) {
  this.m2(m, v);
});
$p.kc = (function(m, v) {
  this.m4(m, v);
});
$p.kd = (function(m, v) {
  this.m6(m, v);
});
$p.ke = (function(m, v) {
  this.m8(m, v);
});
$p.kf = (function(m, v) {
  this.ma(m, v);
});
$p.kg = (function(m, v) {
  this.mc(m, v);
});
$p.kh = (function(m, v) {
  this.me(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  e8: 1,
  T: 1,
  aL: 1,
  aM: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody, fragBuiltinParams) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, fragmentBody, fragBuiltinParams);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.fO, f$proxy1, g$proxy1];
  var parts = [];
  var i = 0;
  while ((i < (all.length | 0))) {
    if ((all[i].length > 0)) {
      parts.push(all[i]);
    }
    i = ((1 + i) | 0);
  }
  return parts.join("\n\n");
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, body) {
  return (("@vertex\nfn vs_main(in: VertexInput) -> VertexOutput {\n  var out: VertexOutput;\n" + body) + "\n  return out;\n}");
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, body, builtinParams) {
  return (((("@fragment\nfn fs_main(in: VertexOutput" + builtinParams) + ") -> FragmentOutput {\n  var out: FragmentOutput;\n") + body) + "\n  return out;\n}");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_ShaderDef(vertexBody, fragmentBody, helperFns) {
  this.au = null;
  this.at = null;
  this.fO = null;
  this.au = vertexBody;
  this.at = fragmentBody;
  this.fO = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-1488826029), true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.au === x$0.au) && (this.at === x$0.at)) && (this.fO === x$0.fO))));
});
$p.i = (function() {
  return $m_sr_ScalaRunTime$().kL(this);
});
$p.p = (function() {
  return 3;
});
$p.r = (function() {
  return "ShaderDef";
});
$p.k = (function(n) {
  switch (n) {
    case 0: {
      return this.au;
      break;
    }
    case 1: {
      return this.at;
      break;
    }
    case 2: {
      return this.fO;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aR)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  aR: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  aU: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  aX: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => $isByte(x)));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  a1: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  b2: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  b6: 1,
  W: 1,
  U: 1,
  Y: 1,
  V: 1
}));
function $ct_jl_NullPointerException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_NullPointerException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  b7: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b9)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  ba: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  bf: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  bk: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.is)) {
    if (($thiz.gr === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.gr;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.h9.N));
      try {
        var $x_1 = ((($thiz.gr + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.ir = $x_1;
    $thiz.is = true;
  }
  return $thiz.ir;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.gr = null;
    this.ir = null;
    this.is = false;
    this.gr = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gX() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bu: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fs = 0;
  this.iu = 0;
  this.it = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.it = outer;
  this.fs = 0;
  this.iu = outer.p();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.v = (function() {
  return (this.fs < this.iu);
});
$p.s = (function() {
  var result = this.it.k(this.fs);
  this.fs = ((1 + this.fs) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bw: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.eC = null;
  this.eC = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.p = (function() {
  return 1;
});
$p.k = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.i = (function() {
  return (("(" + this.eC) + ")");
});
$p.r = (function() {
  return "Tuple1";
});
$p.t = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, 1228477340, true);
});
$p.j = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().a(this.eC, x$1.eC)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  a3: 1,
  bx: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.eD = null;
  this.aJ = null;
  this.aK = null;
  this.aL = null;
  this.aM = null;
  this.aN = null;
  this.aO = null;
  this.aP = null;
  this.aQ = null;
  this.aI = null;
  this.eD = _1;
  this.aJ = _2;
  this.aK = _3;
  this.aL = _4;
  this.aM = _5;
  this.aN = _6;
  this.aO = _7;
  this.aP = _8;
  this.aQ = _9;
  this.aI = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 10;
});
$p.k = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, 2104595240, true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().a(this.eD, x$0.eD) && $m_sr_BoxesRunTime$().a(this.aJ, x$0.aJ)) && $m_sr_BoxesRunTime$().a(this.aK, x$0.aK)) && $m_sr_BoxesRunTime$().a(this.aL, x$0.aL)) && $m_sr_BoxesRunTime$().a(this.aM, x$0.aM)) && $m_sr_BoxesRunTime$().a(this.aN, x$0.aN)) && $m_sr_BoxesRunTime$().a(this.aO, x$0.aO)) && $m_sr_BoxesRunTime$().a(this.aP, x$0.aP)) && $m_sr_BoxesRunTime$().a(this.aQ, x$0.aQ)) && $m_sr_BoxesRunTime$().a(this.aI, x$0.aI))));
});
$p.r = (function() {
  return "Tuple10";
});
$p.i = (function() {
  return (((((((((((((((((((("(" + this.eD) + ",") + this.aJ) + ",") + this.aK) + ",") + this.aL) + ",") + this.aM) + ",") + this.aN) + ",") + this.aO) + ",") + this.aP) + ",") + this.aQ) + ",") + this.aI) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  a4: 1,
  b: 1,
  c: 1,
  by: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.eE = null;
  this.aT = null;
  this.aU = null;
  this.aV = null;
  this.aW = null;
  this.aX = null;
  this.aY = null;
  this.aZ = null;
  this.b0 = null;
  this.aR = null;
  this.aS = null;
  this.eE = _1;
  this.aT = _2;
  this.aU = _3;
  this.aV = _4;
  this.aW = _5;
  this.aX = _6;
  this.aY = _7;
  this.aZ = _8;
  this.b0 = _9;
  this.aR = _10;
  this.aS = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 11;
});
$p.k = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, 838406606, true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().a(this.eE, x$0.eE) && $m_sr_BoxesRunTime$().a(this.aT, x$0.aT)) && $m_sr_BoxesRunTime$().a(this.aU, x$0.aU)) && $m_sr_BoxesRunTime$().a(this.aV, x$0.aV)) && $m_sr_BoxesRunTime$().a(this.aW, x$0.aW)) && $m_sr_BoxesRunTime$().a(this.aX, x$0.aX)) && $m_sr_BoxesRunTime$().a(this.aY, x$0.aY)) && $m_sr_BoxesRunTime$().a(this.aZ, x$0.aZ)) && $m_sr_BoxesRunTime$().a(this.b0, x$0.b0)) && $m_sr_BoxesRunTime$().a(this.aR, x$0.aR)) && $m_sr_BoxesRunTime$().a(this.aS, x$0.aS))));
});
$p.r = (function() {
  return "Tuple11";
});
$p.i = (function() {
  return (((((((((((((((((((((("(" + this.eE) + ",") + this.aT) + ",") + this.aU) + ",") + this.aV) + ",") + this.aW) + ",") + this.aX) + ",") + this.aY) + ",") + this.aZ) + ",") + this.b0) + ",") + this.aR) + ",") + this.aS) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  a5: 1,
  b: 1,
  c: 1,
  bz: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.eF = null;
  this.b4 = null;
  this.b5 = null;
  this.b6 = null;
  this.b7 = null;
  this.b8 = null;
  this.b9 = null;
  this.ba = null;
  this.bb = null;
  this.b1 = null;
  this.b2 = null;
  this.b3 = null;
  this.eF = _1;
  this.b4 = _2;
  this.b5 = _3;
  this.b6 = _4;
  this.b7 = _5;
  this.b8 = _6;
  this.b9 = _7;
  this.ba = _8;
  this.bb = _9;
  this.b1 = _10;
  this.b2 = _11;
  this.b3 = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 12;
});
$p.k = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-1964145863), true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().a(this.eF, x$0.eF) && $m_sr_BoxesRunTime$().a(this.b4, x$0.b4)) && $m_sr_BoxesRunTime$().a(this.b5, x$0.b5)) && $m_sr_BoxesRunTime$().a(this.b6, x$0.b6)) && $m_sr_BoxesRunTime$().a(this.b7, x$0.b7)) && $m_sr_BoxesRunTime$().a(this.b8, x$0.b8)) && $m_sr_BoxesRunTime$().a(this.b9, x$0.b9)) && $m_sr_BoxesRunTime$().a(this.ba, x$0.ba)) && $m_sr_BoxesRunTime$().a(this.bb, x$0.bb)) && $m_sr_BoxesRunTime$().a(this.b1, x$0.b1)) && $m_sr_BoxesRunTime$().a(this.b2, x$0.b2)) && $m_sr_BoxesRunTime$().a(this.b3, x$0.b3))));
});
$p.r = (function() {
  return "Tuple12";
});
$p.i = (function() {
  return (((((((((((((((((((((((("(" + this.eF) + ",") + this.b4) + ",") + this.b5) + ",") + this.b6) + ",") + this.b7) + ",") + this.b8) + ",") + this.b9) + ",") + this.ba) + ",") + this.bb) + ",") + this.b1) + ",") + this.b2) + ",") + this.b3) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  a6: 1,
  b: 1,
  c: 1,
  bA: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.eG = null;
  this.bg = null;
  this.bh = null;
  this.bi = null;
  this.bj = null;
  this.bk = null;
  this.bl = null;
  this.bm = null;
  this.bn = null;
  this.bc = null;
  this.bd = null;
  this.be = null;
  this.bf = null;
  this.eG = _1;
  this.bg = _2;
  this.bh = _3;
  this.bi = _4;
  this.bj = _5;
  this.bk = _6;
  this.bl = _7;
  this.bm = _8;
  this.bn = _9;
  this.bc = _10;
  this.bd = _11;
  this.be = _12;
  this.bf = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 13;
});
$p.k = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, 1224168367, true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().a(this.eG, x$0.eG) && $m_sr_BoxesRunTime$().a(this.bg, x$0.bg)) && $m_sr_BoxesRunTime$().a(this.bh, x$0.bh)) && $m_sr_BoxesRunTime$().a(this.bi, x$0.bi)) && $m_sr_BoxesRunTime$().a(this.bj, x$0.bj)) && $m_sr_BoxesRunTime$().a(this.bk, x$0.bk)) && $m_sr_BoxesRunTime$().a(this.bl, x$0.bl)) && $m_sr_BoxesRunTime$().a(this.bm, x$0.bm)) && $m_sr_BoxesRunTime$().a(this.bn, x$0.bn)) && $m_sr_BoxesRunTime$().a(this.bc, x$0.bc)) && $m_sr_BoxesRunTime$().a(this.bd, x$0.bd)) && $m_sr_BoxesRunTime$().a(this.be, x$0.be)) && $m_sr_BoxesRunTime$().a(this.bf, x$0.bf))));
});
$p.r = (function() {
  return "Tuple13";
});
$p.i = (function() {
  return (((((((((((((((((((((((((("(" + this.eG) + ",") + this.bg) + ",") + this.bh) + ",") + this.bi) + ",") + this.bj) + ",") + this.bk) + ",") + this.bl) + ",") + this.bm) + ",") + this.bn) + ",") + this.bc) + ",") + this.bd) + ",") + this.be) + ",") + this.bf) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  a7: 1,
  b: 1,
  c: 1,
  bB: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.eH = null;
  this.bt = null;
  this.bu = null;
  this.bv = null;
  this.bw = null;
  this.bx = null;
  this.by = null;
  this.bz = null;
  this.bA = null;
  this.bo = null;
  this.bp = null;
  this.bq = null;
  this.br = null;
  this.bs = null;
  this.eH = _1;
  this.bt = _2;
  this.bu = _3;
  this.bv = _4;
  this.bw = _5;
  this.bx = _6;
  this.by = _7;
  this.bz = _8;
  this.bA = _9;
  this.bo = _10;
  this.bp = _11;
  this.bq = _12;
  this.br = _13;
  this.bs = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 14;
});
$p.k = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, 147759069, true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().a(this.eH, x$0.eH) && $m_sr_BoxesRunTime$().a(this.bt, x$0.bt)) && $m_sr_BoxesRunTime$().a(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().a(this.bv, x$0.bv)) && $m_sr_BoxesRunTime$().a(this.bw, x$0.bw)) && $m_sr_BoxesRunTime$().a(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().a(this.by, x$0.by)) && $m_sr_BoxesRunTime$().a(this.bz, x$0.bz)) && $m_sr_BoxesRunTime$().a(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().a(this.bo, x$0.bo)) && $m_sr_BoxesRunTime$().a(this.bp, x$0.bp)) && $m_sr_BoxesRunTime$().a(this.bq, x$0.bq)) && $m_sr_BoxesRunTime$().a(this.br, x$0.br)) && $m_sr_BoxesRunTime$().a(this.bs, x$0.bs))));
});
$p.r = (function() {
  return "Tuple14";
});
$p.i = (function() {
  return (((((((((((((((((((((((((((("(" + this.eH) + ",") + this.bt) + ",") + this.bu) + ",") + this.bv) + ",") + this.bw) + ",") + this.bx) + ",") + this.by) + ",") + this.bz) + ",") + this.bA) + ",") + this.bo) + ",") + this.bp) + ",") + this.bq) + ",") + this.br) + ",") + this.bs) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  a8: 1,
  b: 1,
  c: 1,
  bC: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.eI = null;
  this.bH = null;
  this.bI = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.bN = null;
  this.bO = null;
  this.bB = null;
  this.bC = null;
  this.bD = null;
  this.bE = null;
  this.bF = null;
  this.bG = null;
  this.eI = _1;
  this.bH = _2;
  this.bI = _3;
  this.bJ = _4;
  this.bK = _5;
  this.bL = _6;
  this.bM = _7;
  this.bN = _8;
  this.bO = _9;
  this.bB = _10;
  this.bC = _11;
  this.bD = _12;
  this.bE = _13;
  this.bF = _14;
  this.bG = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 15;
});
$p.k = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, 1834180931, true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().a(this.eI, x$0.eI) && $m_sr_BoxesRunTime$().a(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().a(this.bI, x$0.bI)) && $m_sr_BoxesRunTime$().a(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().a(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().a(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().a(this.bM, x$0.bM)) && $m_sr_BoxesRunTime$().a(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().a(this.bO, x$0.bO)) && $m_sr_BoxesRunTime$().a(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().a(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().a(this.bD, x$0.bD)) && $m_sr_BoxesRunTime$().a(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().a(this.bF, x$0.bF)) && $m_sr_BoxesRunTime$().a(this.bG, x$0.bG))));
});
$p.r = (function() {
  return "Tuple15";
});
$p.i = (function() {
  return (((((((((((((((((((((((((((((("(" + this.eI) + ",") + this.bH) + ",") + this.bI) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ",") + this.bN) + ",") + this.bO) + ",") + this.bB) + ",") + this.bC) + ",") + this.bD) + ",") + this.bE) + ",") + this.bF) + ",") + this.bG) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  a9: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.eJ = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.c1 = null;
  this.c2 = null;
  this.c3 = null;
  this.bP = null;
  this.bQ = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.bV = null;
  this.eJ = _1;
  this.bW = _2;
  this.bX = _3;
  this.bY = _4;
  this.bZ = _5;
  this.c0 = _6;
  this.c1 = _7;
  this.c2 = _8;
  this.c3 = _9;
  this.bP = _10;
  this.bQ = _11;
  this.bR = _12;
  this.bS = _13;
  this.bT = _14;
  this.bU = _15;
  this.bV = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 16;
});
$p.k = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, 499793902, true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().a(this.eJ, x$0.eJ) && $m_sr_BoxesRunTime$().a(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().a(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().a(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().a(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().a(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().a(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().a(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().a(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().a(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().a(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().a(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().a(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().a(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().a(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().a(this.bV, x$0.bV))));
});
$p.r = (function() {
  return "Tuple16";
});
$p.i = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.eJ) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ",") + this.c1) + ",") + this.c2) + ",") + this.c3) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ",") + this.bV) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  aa: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.eK = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.eK = _1;
  this.cc = _2;
  this.cd = _3;
  this.ce = _4;
  this.cf = _5;
  this.cg = _6;
  this.ch = _7;
  this.ci = _8;
  this.cj = _9;
  this.c4 = _10;
  this.c5 = _11;
  this.c6 = _12;
  this.c7 = _13;
  this.c8 = _14;
  this.c9 = _15;
  this.ca = _16;
  this.cb = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 17;
});
$p.k = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-934366247), true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().a(this.eK, x$0.eK) && $m_sr_BoxesRunTime$().a(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().a(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().a(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().a(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().a(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().a(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().a(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().a(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().a(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().a(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().a(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().a(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().a(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().a(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().a(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().a(this.cb, x$0.cb))));
});
$p.r = (function() {
  return "Tuple17";
});
$p.i = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.eK) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  ab: 1,
  b: 1,
  c: 1,
  bF: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.eL = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.eL = _1;
  this.ct = _2;
  this.cu = _3;
  this.cv = _4;
  this.cw = _5;
  this.cx = _6;
  this.cy = _7;
  this.cz = _8;
  this.cA = _9;
  this.ck = _10;
  this.cl = _11;
  this.cm = _12;
  this.cn = _13;
  this.co = _14;
  this.cp = _15;
  this.cq = _16;
  this.cr = _17;
  this.cs = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 18;
});
$p.k = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-937041276), true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().a(this.eL, x$0.eL) && $m_sr_BoxesRunTime$().a(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().a(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().a(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().a(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().a(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().a(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().a(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().a(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().a(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().a(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().a(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().a(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().a(this.co, x$0.co)) && $m_sr_BoxesRunTime$().a(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().a(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().a(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().a(this.cs, x$0.cs))));
});
$p.r = (function() {
  return "Tuple18";
});
$p.i = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.eL) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ac: 1,
  b: 1,
  c: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.eM = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.eM = _1;
  this.cL = _2;
  this.cM = _3;
  this.cN = _4;
  this.cO = _5;
  this.cP = _6;
  this.cQ = _7;
  this.cR = _8;
  this.cS = _9;
  this.cB = _10;
  this.cC = _11;
  this.cD = _12;
  this.cE = _13;
  this.cF = _14;
  this.cG = _15;
  this.cH = _16;
  this.cI = _17;
  this.cJ = _18;
  this.cK = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 19;
});
$p.k = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-1955940499), true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().a(this.eM, x$0.eM) && $m_sr_BoxesRunTime$().a(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().a(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().a(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().a(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().a(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().a(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().a(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().a(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().a(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().a(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().a(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().a(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().a(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().a(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().a(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().a(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().a(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().a(this.cK, x$0.cK))));
});
$p.r = (function() {
  return "Tuple19";
});
$p.i = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.eM) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  ad: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.M = null;
  this.U = null;
  this.M = _1;
  this.U = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.p = (function() {
  return 2;
});
$p.k = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.i = (function() {
  return (((("(" + this.M) + ",") + this.U) + ")");
});
$p.r = (function() {
  return "Tuple2";
});
$p.t = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-116390334), true);
});
$p.j = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().a(this.M, x$1.M) && $m_sr_BoxesRunTime$().a(this.U, x$1.U))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  ae: 1,
  bI: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.eN = null;
  this.d3 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d4 = null;
  this.eN = _1;
  this.d3 = _2;
  this.d5 = _3;
  this.d6 = _4;
  this.d7 = _5;
  this.d8 = _6;
  this.d9 = _7;
  this.da = _8;
  this.db = _9;
  this.cT = _10;
  this.cU = _11;
  this.cV = _12;
  this.cW = _13;
  this.cX = _14;
  this.cY = _15;
  this.cZ = _16;
  this.d0 = _17;
  this.d1 = _18;
  this.d2 = _19;
  this.d4 = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 20;
});
$p.k = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, 1328807075, true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().a(this.eN, x$0.eN) && $m_sr_BoxesRunTime$().a(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().a(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().a(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().a(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().a(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().a(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().a(this.da, x$0.da)) && $m_sr_BoxesRunTime$().a(this.db, x$0.db)) && $m_sr_BoxesRunTime$().a(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().a(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().a(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().a(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().a(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().a(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().a(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().a(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().a(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().a(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().a(this.d4, x$0.d4))));
});
$p.r = (function() {
  return "Tuple20";
});
$p.i = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.eN) + ",") + this.d3) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d4) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  af: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.eO = null;
  this.dm = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dn = null;
  this.dp = null;
  this.eO = _1;
  this.dm = _2;
  this.dq = _3;
  this.dr = _4;
  this.ds = _5;
  this.dt = _6;
  this.du = _7;
  this.dv = _8;
  this.dw = _9;
  this.dc = _10;
  this.dd = _11;
  this.de = _12;
  this.df = _13;
  this.dg = _14;
  this.dh = _15;
  this.di = _16;
  this.dj = _17;
  this.dk = _18;
  this.dl = _19;
  this.dn = _20;
  this.dp = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 21;
});
$p.k = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-21288119), true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().a(this.eO, x$0.eO) && $m_sr_BoxesRunTime$().a(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().a(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().a(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().a(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().a(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().a(this.du, x$0.du)) && $m_sr_BoxesRunTime$().a(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().a(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().a(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().a(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().a(this.de, x$0.de)) && $m_sr_BoxesRunTime$().a(this.df, x$0.df)) && $m_sr_BoxesRunTime$().a(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().a(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().a(this.di, x$0.di)) && $m_sr_BoxesRunTime$().a(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().a(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().a(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().a(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().a(this.dp, x$0.dp))));
});
$p.r = (function() {
  return "Tuple21";
});
$p.i = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.eO) + ",") + this.dm) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dn) + ",") + this.dp) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ag: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.eP = null;
  this.dH = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.eP = _1;
  this.dH = _2;
  this.dL = _3;
  this.dM = _4;
  this.dN = _5;
  this.dO = _6;
  this.dP = _7;
  this.dQ = _8;
  this.dR = _9;
  this.dx = _10;
  this.dy = _11;
  this.dz = _12;
  this.dA = _13;
  this.dB = _14;
  this.dC = _15;
  this.dD = _16;
  this.dE = _17;
  this.dF = _18;
  this.dG = _19;
  this.dI = _20;
  this.dJ = _21;
  this.dK = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 22;
});
$p.k = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-139445068), true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().a(this.eP, x$0.eP) && $m_sr_BoxesRunTime$().a(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().a(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().a(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().a(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().a(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().a(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().a(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().a(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().a(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().a(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().a(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().a(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().a(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().a(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().a(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().a(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().a(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().a(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().a(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().a(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().a(this.dK, x$0.dK))));
});
$p.r = (function() {
  return "Tuple22";
});
$p.i = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.eP) + ",") + this.dH) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  ah: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.ay = null;
  this.ak = null;
  this.al = null;
  this.ay = _1;
  this.ak = _2;
  this.al = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 3;
});
$p.k = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-192629203), true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().a(this.ay, x$0.ay) && $m_sr_BoxesRunTime$().a(this.ak, x$0.ak)) && $m_sr_BoxesRunTime$().a(this.al, x$0.al))));
});
$p.r = (function() {
  return "Tuple3";
});
$p.i = (function() {
  return (((((("(" + this.ay) + ",") + this.ak) + ",") + this.al) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ai: 1,
  b: 1,
  c: 1,
  bM: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.dS = null;
  this.az = null;
  this.aA = null;
  this.aB = null;
  this.dS = _1;
  this.az = _2;
  this.aA = _3;
  this.aB = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 4;
});
$p.k = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-1542739752), true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().a(this.dS, x$0.dS) && $m_sr_BoxesRunTime$().a(this.az, x$0.az)) && $m_sr_BoxesRunTime$().a(this.aA, x$0.aA)) && $m_sr_BoxesRunTime$().a(this.aB, x$0.aB))));
});
$p.r = (function() {
  return "Tuple4";
});
$p.i = (function() {
  return (((((((("(" + this.dS) + ",") + this.az) + ",") + this.aA) + ",") + this.aB) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  aj: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.eQ = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.eQ = _1;
  this.dT = _2;
  this.dU = _3;
  this.dV = _4;
  this.dW = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 5;
});
$p.k = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, 417360321, true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().a(this.eQ, x$0.eQ) && $m_sr_BoxesRunTime$().a(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().a(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().a(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().a(this.dW, x$0.dW))));
});
$p.r = (function() {
  return "Tuple5";
});
$p.i = (function() {
  return (((((((((("(" + this.eQ) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  ak: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.eR = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.e1 = null;
  this.eR = _1;
  this.dX = _2;
  this.dY = _3;
  this.dZ = _4;
  this.e0 = _5;
  this.e1 = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 6;
});
$p.k = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-1037607828), true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().a(this.eR, x$0.eR) && $m_sr_BoxesRunTime$().a(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().a(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().a(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().a(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().a(this.e1, x$0.e1))));
});
$p.r = (function() {
  return "Tuple6";
});
$p.i = (function() {
  return (((((((((((("(" + this.eR) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  al: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.eS = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.eS = _1;
  this.e2 = _2;
  this.e3 = _3;
  this.e4 = _4;
  this.e5 = _5;
  this.e6 = _6;
  this.e7 = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 7;
});
$p.k = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-1050932777), true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().a(this.eS, x$0.eS) && $m_sr_BoxesRunTime$().a(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().a(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().a(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().a(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().a(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().a(this.e7, x$0.e7))));
});
$p.r = (function() {
  return "Tuple7";
});
$p.i = (function() {
  return (((((((((((((("(" + this.eS) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  am: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.eT = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.eb = null;
  this.ec = null;
  this.ed = null;
  this.ee = null;
  this.eT = _1;
  this.e8 = _2;
  this.e9 = _3;
  this.ea = _4;
  this.eb = _5;
  this.ec = _6;
  this.ed = _7;
  this.ee = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 8;
});
$p.k = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, 1998822530, true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().a(this.eT, x$0.eT) && $m_sr_BoxesRunTime$().a(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().a(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().a(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().a(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().a(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().a(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().a(this.ee, x$0.ee))));
});
$p.r = (function() {
  return "Tuple8";
});
$p.i = (function() {
  return (((((((((((((((("(" + this.eT) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  an: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.eU = null;
  this.ef = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.em = null;
  this.eU = _1;
  this.ef = _2;
  this.eg = _3;
  this.eh = _4;
  this.ei = _5;
  this.ej = _6;
  this.ek = _7;
  this.el = _8;
  this.em = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 9;
});
$p.k = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().w(this, (-1807911176), true);
});
$p.j = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().a(this.eU, x$0.eU) && $m_sr_BoxesRunTime$().a(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().a(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().a(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().a(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().a(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().a(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().a(this.el, x$0.el)) && $m_sr_BoxesRunTime$().a(this.em, x$0.em))));
});
$p.r = (function() {
  return "Tuple9";
});
$p.i = (function() {
  return (((((((((((((((((("(" + this.eU) + ",") + this.ef) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ",") + this.em) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  ao: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.fk() + "("), ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.v = (function() {
  return false;
});
$p.mm = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.S = (function() {
  return 0;
});
$p.s = (function() {
  this.mm();
});
$p.h6 = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  c2: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.T instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.T;
      $thiz.T = c.T;
      $thiz.aD = c.aD;
      if ((c.a1 !== null)) {
        if (($thiz.a0 === null)) {
          $thiz.a0 = c.a0;
        }
        var x$proxy10 = c.a0;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().h0();
        }
        x$proxy10.fu = $thiz.a1;
        $thiz.a1 = c.a1;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.a1 === null)) {
      $thiz.T = null;
      $thiz.a0 = null;
      return false;
    } else {
      $thiz.T = $thiz.a1.lt();
      if (($thiz.a0 === $thiz.a1)) {
        var x$proxy12 = $thiz.a0;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().h0();
        }
        $thiz.a0 = x$proxy12.fu;
      }
      $thiz.a1 = $thiz.a1.fu;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.aD) {
        return true;
      } else {
        if ((!(($thiz.T !== null) && $thiz.T.v()))) {
          continue;
        }
        $thiz.aD = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.T = null;
  this.a1 = null;
  this.a0 = null;
  this.aD = false;
  this.T = from;
  this.a1 = null;
  this.a0 = null;
  this.aD = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.v = (function() {
  if (this.aD) {
    return true;
  } else if ((this.T !== null)) {
    if (this.T.v()) {
      this.aD = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.s = (function() {
  if (this.v()) {
    this.aD = false;
    var x$proxy13 = this.T;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().h0();
    }
    return x$proxy13.s();
  } else {
    return $m_sc_Iterator$().an.s();
  }
});
$p.l0 = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.a1 === null)) {
    this.a1 = c;
    this.a0 = c;
  } else {
    var x$proxy14 = this.a0;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().h0();
    }
    x$proxy14.fu = c;
    this.a0 = c;
  }
  if ((this.T === null)) {
    this.T = $m_sc_Iterator$().an;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.at)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  at: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.ao > 0)) {
    if ($thiz.aE.v()) {
      $thiz.aE.s();
      $thiz.ao = (($thiz.ao - 1) | 0);
    } else {
      $thiz.ao = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.V < 0)) {
    return (-1);
  } else {
    var that = (($thiz.V - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.aE = null;
  this.V = 0;
  this.ao = 0;
  this.aE = underlying;
  this.V = limit;
  this.ao = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.S = (function() {
  var size = this.aE.S();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.ao) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.V < 0)) {
      return dropSize;
    } else {
      var x = this.V;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.v = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.V !== 0) && this.aE.v());
});
$p.s = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.V > 0)) {
    this.V = ((this.V - 1) | 0);
    return this.aE.s();
  } else {
    return ((this.V < 0) ? this.aE.s() : $m_sc_Iterator$().an.s());
  }
});
$p.h6 = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.V < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.ao + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().an;
  } else if ((sum < 0)) {
    this.ao = 2147483647;
    this.V = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.aE, ((sum - 2147483647) | 0), rest))));
  } else {
    this.ao = sum;
    this.V = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  c4: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.lc(n);
  if (skipped.G()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.i9();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      if ((((!a$tailLocal1.G()) && (!b$tailLocal1.G())) && $m_sr_BoxesRunTime$().a(a$tailLocal1.i9(), b$tailLocal1.i9()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.ie();
        var b$tailLocal1$tmp1 = b$tailLocal1.ie();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.G() && b$tailLocal1.G());
    }
  }
}
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  cj: 1,
  a: 1,
  as: 1,
  c6: 1,
  ca: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.iI = null;
  this.fw = 0;
  this.iH = 0;
  this.iI = x$1;
  this.fw = 0;
  this.iH = x$1.p();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.v = (function() {
  return (this.fw < this.iH);
});
$p.s = (function() {
  var result = this.iI.k(this.fw);
  this.fw = ((1 + this.fw) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cV: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a0)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a0: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1,
  y: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  b1: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1,
  y: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  b3: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1,
  y: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, $thizhi, that) {
  if ((that instanceof $Long)) {
    var $x_1 = that;
    var this$1_$_lo = $x_1.l;
    var this$1_$_hi = $x_1.h;
    return ((($thiz ^ this$1_$_lo) | ($thizhi ^ this$1_$_hi)) === 0);
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().kr($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a2: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1,
  y: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  b8: 1,
  a1: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().mS(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bb: 1,
  a: 1,
  i: 1,
  F: 1,
  g: 1,
  y: 1
}), ((x) => ((typeof x) === "string")));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.g4 = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.i0 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fk = (function() {
  return this.eA();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.gs = null;
  this.am = 0;
  this.ft = 0;
  this.gs = xs;
  this.am = 0;
  this.ft = $m_jl_reflect_Array$().i6(this.gs);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.S = (function() {
  return ((this.ft - this.am) | 0);
});
$p.v = (function() {
  return (this.am < this.ft);
});
$p.s = (function() {
  if ((this.am >= $m_jl_reflect_Array$().i6(this.gs))) {
    $m_sc_Iterator$().an.s();
  }
  var r = $m_sr_ScalaRunTime$().fj(this.gs, this.am);
  this.am = ((1 + this.am) | 0);
  return r;
});
$p.gV = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.am + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.ft;
    } else {
      var a = this.ft;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.am = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bW: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.a5) ? $thiz.a5 : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.iv = null;
  this.aC = 0;
  this.a5 = 0;
  this.iv = self;
  this.aC = 0;
  this.a5 = self.u();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.S = (function() {
  return this.a5;
});
$p.v = (function() {
  return (this.a5 > 0);
});
$p.s = (function() {
  if ((this.a5 > 0)) {
    var r = this.iv.F(this.aC);
    this.aC = ((1 + this.aC) | 0);
    this.a5 = ((this.a5 - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().an.s();
  }
});
$p.gV = (function(n) {
  if ((n > 0)) {
    this.aC = ((this.aC + n) | 0);
    var b = ((this.a5 - n) | 0);
    this.a5 = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.h6 = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.a5 = ((b < 0) ? 0 : b);
  this.aC = ((this.aC + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c0: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.iz)) {
    $thiz.iy = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.iz = true;
  }
  return $thiz.iy;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.iy = null;
  this.iz = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  cf: 1,
  a: 1,
  ar: 1,
  ap: 1,
  aq: 1,
  au: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_scm_ArraySeq$() {
  this.iB = null;
  $n_scm_ArraySeq$ = this;
  this.iB = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cm: 1,
  a: 1,
  ar: 1,
  ap: 1,
  aq: 1,
  au: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $p;
/** @constructor */
function $c_T$package$EmptyTuple$() {
}
$p = $c_T$package$EmptyTuple$.prototype = new $h_O();
$p.constructor = $c_T$package$EmptyTuple$;
/** @constructor */
function $h_T$package$EmptyTuple$() {
}
$h_T$package$EmptyTuple$.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 924202651;
});
$p.p = (function() {
  return 0;
});
$p.r = (function() {
  return "EmptyTuple";
});
$p.k = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.i = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bT: 1,
  b: 1,
  c: 1,
  a: 1,
  cs: 1,
  ct: 1,
  cu: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.eA() + "(<not computed>)");
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.eo = null;
    this.eo = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gX() {
    return $dp_toString__T(this.eo);
  }
  r() {
    return "JavaScriptException";
  }
  p() {
    return 1;
  }
  k(x$1) {
    return ((x$1 === 0) ? this.eo : $m_sr_Statics$().lA(x$1));
  }
  t() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  l() {
    return $m_s_util_hashing_MurmurHash3$().w(this, 1744042595, true);
  }
  j(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().a(this.eo, x$1.eo)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aF: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.ik && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.ik = false;
  this.fr = null;
  this.ik = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.fr = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.lD = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.fr = (("" + this.fr) + rest);
      rest = "";
    } else {
      var $x_1 = this.fr;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.fr = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  b5: 1,
  aT: 1,
  aS: 1,
  W: 1,
  U: 1,
  Y: 1,
  V: 1,
  X: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.G())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.ie();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.hc = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.i = (function() {
  return this.hc;
});
$p.j = (function(that) {
  return (this === that);
});
$p.l = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.i = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.hc = null;
  this.hc = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cB: 1,
  cC: 1,
  cA: 1,
  a: 1,
  cD: 1,
  cx: 1,
  b: 1,
  cy: 1,
  cz: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.i3($thiz)) {
        return $thiz.h5(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.l)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.l)));
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.G = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.h5 = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.i3 = (function(that) {
  return true;
});
$p.j = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().kq(this);
});
$p.i = (function() {
  return $f_sc_Iterable__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.o)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.H)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.H)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.fv = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.fv = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.F = (function(idx) {
  return this.fv.F(idx);
});
$p.u = (function() {
  return this.fv.u();
});
$p.G = (function() {
  return this.fv.G();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.fv = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.ez = (function(len) {
  var x = this.u();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.S = (function() {
  return this.u();
});
$p.K = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.eA = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  bZ: 1,
  c8: 1,
  bU: 1,
  bV: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  a: 1,
  cc: 1,
  t: 1,
  c7: 1,
  w: 1,
  bY: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ($is_sci_IndexedSeq(that) ? ($thiz.u() === that.u()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.u();
      var equal = (length === o.u());
      if (equal) {
        var index = 0;
        var a = $thiz.i2();
        var b = o.i2();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().a($thiz.F(index), o.F(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.K().gV(index);
          var thatIt = o.K().gV(index);
          while ((equal && thisIt.v())) {
            equal = $m_sr_BoxesRunTime$().a(thisIt.s(), thatIt.s());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.E)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.E)));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.gt = null;
  this.gt = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.i3 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.h5 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.i2 = (function() {
  return $m_sci_IndexedSeqDefaults$().iA;
});
$p.K = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.ez = (function(len) {
  var x = this.u();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.S = (function() {
  return this.u();
});
$p.j = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().kq(this);
});
$p.i = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.G = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.g4 = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.i0 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.u = (function() {
  return (this.gt.length | 0);
});
$p.F = (function(idx) {
  return this.gt[idx];
});
$p.fk = (function() {
  return "WrappedVarArgs";
});
$p.h = (function(v1) {
  return this.F((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aG)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aG: 1,
  E: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  I: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  K: 1,
  J: 1,
  w: 1,
  o: 1,
  ax: 1,
  L: 1,
  B: 1,
  C: 1,
  a: 1
}));
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.ez = (function(len) {
  var x = this.ap.c.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.S = (function() {
  return this.ap.c.length;
});
$p.eA = (function() {
  return "IndexedSeq";
});
$p.i3 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.h5 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fk = (function() {
  return "ArraySeq";
});
$p.i2 = (function() {
  return 2147483647;
});
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.ez = (function(len) {
  var x = this.a6.c.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.S = (function() {
  return this.a6.c.length;
});
$p.eA = (function() {
  return "IndexedSeq";
});
$p.fk = (function() {
  return "ArraySeq";
});
$p.j = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.a6.c.length !== other.a6.c.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.ap = null;
  this.ap = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.u = (function() {
  return this.ap.c.length;
});
$p.F = (function(i) {
  return this.ap.c[i];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.jN(this.ap, this$1.eX);
});
$p.j = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().jU(this.ap, that.ap) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.K = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ap);
});
$p.h = (function(v1) {
  return this.F((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aw)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  aw: 1,
  ce: 1,
  av: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  I: 1,
  K: 1,
  J: 1,
  w: 1,
  o: 1,
  ax: 1,
  E: 1,
  B: 1,
  C: 1,
  L: 1,
  bX: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.G() ? 0 : 1) : (xs$tailLocal1.G() ? (-1) : xs$tailLocal1.gp()));
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.G();
      var bEmpty = b$tailLocal1.G();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.gZ();
      }
      if (false) {
        a$tailLocal1.gp();
      }
      return (aEmpty && bEmpty);
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.F = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.h5 = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.eA = (function() {
  return "LinearSeq";
});
$p.G = (function() {
  return (this === $m_sci_Nil$());
});
$p.g4 = (function(f) {
  var these = this;
  while ((!these.G())) {
    f.h(these.gZ());
    these.gp();
  }
});
$p.u = (function() {
  var these = this;
  var len = 0;
  while ((!these.G())) {
    len = ((1 + len) | 0);
    these.gp();
  }
  return len;
});
$p.ez = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.fk = (function() {
  return "List";
});
$p.j = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.lc = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ay)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.a6 = null;
  this.a6 = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.u = (function() {
  return this.a6.c.length;
});
$p.F = (function(index) {
  return this.a6.c[index];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.jN(this.a6, this$1.eX);
});
$p.j = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().jU(this.a6, that.a6) : $c_scm_ArraySeq.prototype.j.call(this, that));
});
$p.K = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.a6);
});
$p.h = (function(v1) {
  return this.F((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aA: 1,
  az: 1,
  M: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  Q: 1,
  x: 1,
  N: 1,
  S: 1,
  R: 1,
  w: 1,
  o: 1,
  P: 1,
  O: 1,
  B: 1,
  C: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.t = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 0;
});
$p.r = (function() {
  return "Nil";
});
$p.k = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.gZ = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.gp = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.S = (function() {
  return 0;
});
$p.K = (function() {
  return $m_sc_Iterator$().an;
});
$p.i9 = (function() {
  this.gZ();
});
$p.ie = (function() {
  this.gp();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  ck: 1,
  ay: 1,
  av: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  I: 1,
  K: 1,
  J: 1,
  c5: 1,
  H: 1,
  ci: 1,
  ch: 1,
  B: 1,
  C: 1,
  c9: 1,
  L: 1,
  a: 1,
  cd: 1,
  c: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.ae = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.ae = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.K = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.ez = (function(len) {
  var x = this.ae.u();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.eA = (function() {
  return "IndexedSeq";
});
$p.u = (function() {
  return this.ae.u();
});
$p.S = (function() {
  return this.ae.u();
});
$p.i = (function() {
  return this.ae.L;
});
$p.G = (function() {
  return (this.ae.u() === 0);
});
$p.F = (function(i) {
  return $bC(this.ae.jQ(i));
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.ae.jQ(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cr: 1,
  M: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  Q: 1,
  x: 1,
  N: 1,
  S: 1,
  R: 1,
  aC: 1,
  aD: 1,
  aB: 1,
  cp: 1,
  w: 1,
  o: 1,
  P: 1,
  O: 1,
  F: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.eW = null;
  this.eW = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.eA = (function() {
  return "IndexedSeq";
});
$p.K = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.ez = (function(len) {
  var x = (this.eW.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.F = (function(index) {
  return this.eW[index];
});
$p.u = (function() {
  return (this.eW.length | 0);
});
$p.S = (function() {
  return (this.eW.length | 0);
});
$p.fk = (function() {
  return "WrappedArray";
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.eW[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  d5: 1,
  cl: 1,
  M: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  Q: 1,
  x: 1,
  N: 1,
  S: 1,
  R: 1,
  aC: 1,
  aD: 1,
  cq: 1,
  cn: 1,
  C: 1,
  B: 1,
  O: 1,
  w: 1,
  o: 1,
  P: 1,
  co: 1,
  aB: 1,
  a: 1
}));
$s_Lsketches_rooms_gridceiling_roomsGridCeiling__main__AT__V(new ($d_T.r().C)([]));
